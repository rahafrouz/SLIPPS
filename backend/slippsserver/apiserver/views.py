# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from elasticsearch_dsl import Search, Q, serializer
from elasticsearch import Elasticsearch

class SearchByKeyword(APIView):

    def get(self, request, format=None):
        """
        Return a list of all events matching keyword.
        """
        client = Elasticsearch()
        s = Search(using=client, index="slipps", doc_type="event")

        params = request.query_params

        q = Q("nested", path="keywords", query=Q("match", **{"keywords.content": params["kw"].lower()}))
        s = s.query(q)
        response = s.execute()

        # TODO: Filter results based on user authentication
        # Authenticated users: full details
        # Guest users: restricted data
        return Response(response.to_dict())


class AdvancedSearch(APIView):

    def get(self, request, format=None):
        """
        Return a list of all events matching filters.
        """
        client = Elasticsearch()
        s = Search(
            using = client,
            index = "slipps",
            doc_type = "event"
        ).sort(
            { "_score": { "order": "desc" }},
            { "id": { "order" : "asc" }},
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
            "country": "",
            "language": "",
            "category": "",
            "per_page": 10, #number of items per page, default is 10.
            "page": 1,
            "daterange": "",
            "keywords_and": "",
            "keywords_or": "",
        }
        params.update(request.query_params.dict())

        country = params["country"]
        language = params["language"]
        category = params["category"]
        daterange = params["daterange"].split(",")
        and_kws = list(filter(None, params["keywords_and"].split(",")))
        or_kws = list(filter(None, params["keywords_or"].split(",")))

        q = Q("match_all", **{})

        for kw in and_kws:
            q &= Q("nested", path="keywords", query=Q("match", **{"keywords__content": kw}))

        for kw in or_kws:
            q |= Q("nested", path="keywords", query=Q("match", **{"keywords__content": kw}))

        if country != "":
            q &= Q("nested", path="country", query=Q("match", **{"country__code": country}))

        if language != "":
            q &= Q("nested", path="language", query=Q("match", **{"language__code": language}))

        if category != "":
            q &= Q("match", **{"field_of_study__raw": category})

        s = s.query(q)

        if len(daterange) >= 1:
            try:
                from_year = int(daterange[0])
                print(from_year)
                s = s.filter("range", created_at={ "gte": '{0}-01-01'.format(from_year) })
            except Exception as e:
                pass

            try:
                to_year = int(daterange[1])
                s = s.filter("range", created_at={ "lte": '{0}-12-31'.format(to_year) })
            except Exception as e:
                pass

        # pagination
        # s=s[from:size]
        per_page = int(params["per_page"])
        page = int(params["page"])
        s = s[(page-1)*per_page:page*per_page]
        print(s.to_dict())

        response = s.execute()

        return Response(response.to_dict())
