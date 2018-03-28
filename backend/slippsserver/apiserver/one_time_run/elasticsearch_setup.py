from django.conf import settings
from elasticsearch import Elasticsearch
from elasticsearch_dsl import Index, DocType, Date, Integer, Keyword, Text
from elasticsearch_dsl.connections import connections

connections.create_connection(hosts=['localhost:9200'])
# connections.create_connection("es", hosts=['localhost:9200'], timeout=20)
# client = Elasticsearch()
# connections.add_connection('es', client)

slipps_index = Index('slipps')
slipps_index.settings(
    number_of_shards=1,
    number_of_replicas=0
)

slipps_index.create()


class Country(DocType):
    name = Text()
    code = Text()
    created_at = Date()
    deleted_at = Date()

    class Meta:
        index = 'slipps'

    def save(self, ** kwargs):
        self.created_at = datetime.now()
        return super().save(** kwargs)

# create the mappings in Elasticsearch
Country.init()
