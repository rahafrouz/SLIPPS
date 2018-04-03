# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from elasticsearch_dsl import FacetedSearch, TermsFacet, Search, Q, serializer
from elasticsearch import Elasticsearch

from .serializers import CountrySerializer, SearchSerializer
from .models import Country
from .schema import SearchResult
from .query_builders import EventSearch

class CountryList(generics.ListCreateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class SearchByKeyword(APIView):
    # view to perform simple search with a single keyword
    def get(self, request, format=None):
        """
        Return a list of all event matching keyword.
        """
        # Food and nutrition

        client = Elasticsearch()
        s = Search(using=client, index="slipps", doc_type="event")

        params = request.query_params

        q = Q('bool', must=[Q('match', short_desc="this")])
        s = s.query(q)

        # print(keyword)
        # s = s.query("multi_match", query = params['kw'], type='event', fields=['keywords', 'content.raw'])
        # Match(title={"query": params['kw'], "type": "event"})
        # s = s.query("match", title={"query": params['kw'], "type": "choice"})
        # s = s.query("multi_match", query=params['kw'], type="event")
        response = s.execute()
        # es = EventSearch(params['kw'])
        # response = es.execute()

        # print(response)

        # serializer = SearchSerializer()
        return Response(response.to_dict())
