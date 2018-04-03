# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.apps import AppConfig
from elasticsearch_dsl import connections

class ApiServerConfig(AppConfig):
    name = 'apiserver'
