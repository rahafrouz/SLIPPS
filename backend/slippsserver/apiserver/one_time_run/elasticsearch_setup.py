from django.conf import settings
from elasticsearch import Elasticsearch
from elasticsearch_dsl import Index, DocType, Date, Integer, Keyword, Text
from elasticsearch_dsl.connections import connections

connections.create_connection(hosts=['localhost:9200'])

# slipps_index = Index('slipps')
# slipps_index.settings(
#     number_of_shards=1,
#     number_of_replicas=0
# )

# slipps_index.create()

class Country(DocType):
    country_id = Integer()
    name = Text(fields={'raw': Keyword()})
    code = Text()
    created_at = Date()
    deleted_at = Date()

    class Meta:
        index = 'slipps'
        doc_type = 'country'

    def save(self, ** kwargs):
        self.created_at = datetime.now()
        return super().save(** kwargs)

class Language(DocType):
    lang_id = Integer()
    code_2 = Text()
    code_3 = Text()
    name = Text(fields={'raw': Keyword()})
    created_at = Date()
    deleted_at = Date()

    class Meta:
        index = 'slipps'
        doc_type = 'language'

    def save(self, ** kwargs):
        self.created_at = datetime.now()
        return super().save(** kwargs)

# create the mappings in Elasticsearch
print("==== COUNTRY =====")
Country.init()

print("==== LANGUAGE =====")
Language.init()
