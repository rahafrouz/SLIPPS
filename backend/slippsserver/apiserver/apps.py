# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.apps import AppConfig
from elasticsearch_dsl import connections

class ApiServerConfig(AppConfig):
    name = 'apiserver'
    
    # def ready(self):
        # connections.create_connection("es", hosts=['localhost:9200'], timeout=20)
        # logger = logging.getLogger('scope.name')
        # file_log_handler = logging.FileHandler('logfile.log')
        # logger.addHandler(file_log_handler)
        # stderr_log_handler = logging.StreamHandler()
        # logger.addHandler(stderr_log_handler)

        # formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        # file_log_handler.setFormatter(formatter)
        # stderr_log_handler.setFormatter(formatter)

        # logger.info('Info message')
        # print connections

