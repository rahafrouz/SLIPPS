# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import csv
import os

from django.shortcuts import render
from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile

from rest_framework import generics, viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.parsers import FileUploadParser

# from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.decorators import detail_route, list_route

from elasticsearch_dsl import Search, Q, serializer
from elasticsearch import Elasticsearch

from .utils import process_csv

from .serializers import (
    UserRegistrationSerializer,
    KeywordHitsSerializer,
    CountrySerializer,
    LanguageSerializer,
    ChoiceSerializer,
    KeywordSerializer,
    EventSerializer,
)

from .models import (
    UserAccount,
    KeywordHits,
    Keyword,
    Event,
    Country,
    Language,
    Choice,
    Keyword,
)

User = get_user_model()

class SearchByKeywordView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, format=None):
        '''
        Return a list of all events matching keyword.
        '''
        client = Elasticsearch()
        s = Search(using=client, index='slipps', doc_type='event')

        params = request.query_params
        kw = params['kw'].lower()

        q = Q('nested', path='keywords', query=Q('match', **{'keywords.content': kw}))
        q |= Q('match', description=kw)
        q |= Q('match', why_relevant=kw)

        s = s.query(q)
        response = s.execute()

        # Count number of times a keyword is searched.
        KeywordHits.objects.save_keyword_hit(kw=kw)

        # TODO: Filter results based on user authentication
        # Authenticated users: full details
        # Guest users: restricted data
        return Response(response.to_dict())

class AdvancedSearchView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, format=None):
        '''
        Return a list of all events matching filters.
        '''
        client = Elasticsearch()
        s = Search(
            using = client,
            index = 'slipps',
            doc_type = 'event'
        ).sort(
            { '_score': { 'order': 'desc' }},
            { 'id': { 'order' : 'asc' }},
        )

        # Filter request format
        # &country = 'country_code'
        # &language = 'lang_code'
        # &category = 'category'
        # &daterange = [from_year, to_year]
        # &page = 1
        # &per_page = 10
        # &keywords_and = 'kw1', 'kw2'
        # &keywords_or = 'kw3', 'kw4'
        params = {
            'country': '',
            'language': '',
            'category': '',
            'per_page': 10, #number of items per page, default is 10.
            'page': 1,
            'daterange': '',
            'keywords_and': '',
            'keywords_or': '',
        }
        params.update(request.query_params.dict())

        country = params['country']
        language = params['language']
        category = params['category']
        daterange = params['daterange'].split(',')
        and_kws = list(filter(None, params['keywords_and'].split(',')))
        or_kws = list(filter(None, params['keywords_or'].split(',')))

        q = Q('match_all', **{})

        for kw in and_kws:
            q &= Q('nested', path='keywords', query=Q('match', **{'keywords__content': kw}))
            q |= Q('match', description=kw)
            q |= Q('match', why_relevant=kw)

        for kw in or_kws:
            q |= Q('nested', path='keywords', query=Q('match', **{'keywords__content': kw}))
            q |= Q('match', description=kw)
            q |= Q('match', why_relevant=kw)

        if country != '':
            q &= Q('nested', path='country', query=Q('match', **{'country__code': country}))

        if language != '':
            q &= Q('nested', path='language', query=Q('match', **{'language__code': language}))

        if category != '':
            q &= Q('match', **{'field_of_study__raw': category})

        s = s.query(q)

        if len(daterange) >= 1:
            try:
                from_year = int(daterange[0])
                print(from_year)
                s = s.filter('range', created_at={ 'gte': '{0}-01-01'.format(from_year) })
            except Exception as e:
                pass

            try:
                to_year = int(daterange[1])
                s = s.filter('range', created_at={ 'lte': '{0}-12-31'.format(to_year) })
            except Exception as e:
                pass

        # pagination
        # s=s[from:size]
        per_page = int(params['per_page'])
        page = int(params['page'])
        s = s[(page-1)*per_page:page*per_page]

        response = s.execute()

        for kw in (and_kws+or_kws):
            KeywordHits.objects.save_keyword_hit(kw=kw)

        return Response(response.to_dict())

class InitializeView(APIView):
    # serializer_class = KeywordHitsSerializer
    permission_classes = (AllowAny,)

    def get(self, request, format=None):
        '''
        Return a list of all info needed to start client app.
        '''
        # Get most searched keyword, limit 10 first records by default.
        params = {
            'limit_result': 10
        }
        params.update(request.query_params.dict())

        kw_hits = KeywordHits.objects.get_popular_kws(params['limit_result'])

        # List languages, countries for advanced search dropdown
        countries = Country.objects.raw('SELECT * FROM apiserver_country WHERE id in (SELECT DISTINCT country_id FROM apiserver_event)')
        languages = Language.objects.raw('SELECT * FROM apiserver_language WHERE id in (SELECT DISTINCT language_id FROM apiserver_event)')

        # List available categories from events to search for.
        category_id = getattr(settings, 'SLIPPS_CATEGORY_QUESTION_ID', 1)
        categories = Choice.objects.filter(question_id=category_id).distinct('choice_text')

        return Response({
            'keyword_hits': KeywordHitsSerializer(kw_hits, many=True).data,
            'countries': CountrySerializer(countries, many=True).data,
            'languages': LanguageSerializer(languages, many=True).data,
            'categories': ChoiceSerializer(categories, many=True).data,
            'all_keywords': KeywordSerializer(Keyword.objects.all(), many=True).data,
            'recent_events': EventSerializer(Event.objects.order_by('-created_at')[:5], many=True).data
        })

class EventDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, request, event_id, format=None):
        current_user = request.user
        event = EventSerializer(Event.objects.get(id=event_id)).data

        if not current_user.is_authenticated:
            event['description'] = ''
            event['why_relevant'] = ''
            event['event_details'] = []

        return Response({
            'event': event
        })        

class DocumentUploadView(APIView):
    permission_classes = (IsAuthenticated,)
    parser_classes = (FileUploadParser,)

    def put(self, request, filename, format=None):
        file_obj = request.data['file']

        lines = file_obj.readlines()
        lines = lines[4:-6]

        # NOTE: This is to save the file if needed.
        # content = ''
        # for line in lines:
        #     content += line.decode('utf-8')
        # path = default_storage.save('tmp/{0}'.format(filename), ContentFile(content))
        # media_root = getattr(settings, 'MEDIA_ROOT', '/')
        # tmp_file = os.path.join(media_root, path)

        processed = process_csv(lines, request.user, filename)
        return Response(status=204)

class UserRegistrationView(generics.CreateAPIView):
    '''
    A viewset for viewing and editing user instances.
    '''
    serializer_class = UserRegistrationSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]
