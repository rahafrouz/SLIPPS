# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import generics, views, status
from rest_framework.response import Response

from rest_framework.decorators import api_view
from .serializers import CountrySerializer
from .models import Country

class CountryList(generics.ListCreateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

# class CreateView(views.APIView):
#     queryset = Country.objects.all()

#     def get(self, request, format=None):
#         countries = Country.objects.all()
#         serializer = CountrySerializer(countries, many=True)
#         return Response(serializer.data)

#     @api_view(["POST"])
#     def post(self, request, format=None):
#         serializer = CountrySerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    """This class defines the create behavior of our rest api."""
    # serializer_class = CountrySerializer

    # def create(self, serializer):
    # 	print("perform_create")
    # 	"""Save the post data when creating a new country."""
    # 	serializer.save(country=self.request.country)
    # 	return Response(serializer.data, status=status.HTTP_201_CREATED)

    # def perform_create(self, serializer):
    # 	print("perform_create")
    # 	"""Save the post data when creating a new country."""
    # 	serializer.save(country=self.request.country)
    # 	return Response(serializer.data, status=status.HTTP_201_CREATED)
