# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from elasticsearch_dsl import Search, Q, serializer
from elasticsearch import Elasticsearch

from .serializers import CountrySerializer
from .models import Country
# from .schema import SearchResult
# from .query_builders import EventSearch

class CountryList(generics.ListCreateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class SearchByKeyword(APIView):
    # view to perform simple search with a single keyword
    def get(self, request, format=None):
        """
        Return a list of all events matching keyword.
        """

        client = Elasticsearch()
        s = Search(using=client, index="slipps", doc_type="event")

        params = request.query_params
        print(params)

        q = Q("nested", path="keywords", query=Q("match", **{'keywords.content': params['kw'].lower()}))
        s = s.query(q)
        response = s.execute()
        return Response(response.to_dict())
