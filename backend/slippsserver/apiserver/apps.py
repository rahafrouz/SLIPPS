# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.apps import AppConfig
from elasticsearch_dsl import connections
from django.conf import settings

class ApiServerConfig(AppConfig):
    name = 'apiserver'

    def ready(self):

	    connections.create_connection(
	    	"es",
	    	hosts=[getattr(settings, 'ELASTIC_SEARCH_URL')],
	    	timeout=20
	    )
