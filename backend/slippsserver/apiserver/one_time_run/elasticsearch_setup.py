from elasticsearch import Elasticsearch
from elasticsearch_dsl import Index, DocType, Date, Integer, Keyword, Text, Nested
from elasticsearch_dsl.connections import connections

from .schema import
    Country,
    Language,
    Question,
    Choice,
    TaggedKeyword,
    Event

# create the mappings in Elasticsearch
print("==== COUNTRY =====")
Country.init()

print("==== LANGUAGE =====")
Language.init()

print("==== QUESTION =====")
Question.init()

print("==== CHOICE =====")
Choice.init()

print("==== KEYWORD =====")
TaggedKeyword.init()

print("==== EVENT =====")
Event.init()
