# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.test import TestCase
from rest_framework.test import APIClient, APIRequestFactory
from rest_framework import status
from django.urls import reverse

from .models import Country

# Create your tests here.

class ModelTestCase(TestCase):
    """This class defines the test suite for the country model."""

    def setUp(self):
        """Define the test client and other test variables."""
        self.code = "ab"
        self.name = "My country test"
        self.country = Country(code=self.code, name=self.name)

    def test_model_can_create_a_country(self):
        """Test the country model can create a country."""
        old_count = Country.objects.count()
        self.country.save()
        new_count = Country.objects.count()
        self.assertNotEqual(old_count, new_count)


class ViewTestCase(TestCase):
    """Test suite for the api views."""

    def setUp(self):
        """Define the test client and other test variables."""
        client = APIClient()
        client.login(username='lauren', password='secret')
        self.country_data = {'name': 'My ab country', 'code': '00'}
        self.response = client.post('/countries/', 
            self.country_data,
            format="json"
        )

    def test_api_can_create_a_country(self):
        """Test the api has country creation capability."""
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)
