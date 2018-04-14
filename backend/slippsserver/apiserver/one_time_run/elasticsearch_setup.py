from elasticsearch import Elasticsearch
from elasticsearch_dsl import Index, DocType, Date, Integer, Keyword, Text, Nested
from elasticsearch_dsl.connections import connections

connections.create_connection(hosts=['localhost:9200'])

class Country(DocType):
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

class Question(DocType):
    question_text = Text()
    question_pos = Integer()
    created_at = Date()
    updated_at = Date()
    deleted_at = Date()

    class Meta:
        index = 'slipps'
        doc_type = 'question'

    def save(self, ** kwargs):
        self.updated_at = datetime.now()
        return super().save(** kwargs)

class Choice(DocType):
    choice_num = Integer()
    choice_text = Text()
    created_at = Date()
    updated_at = Date()
    deleted_at = Date()
    question = Nested(
        properties = {
            'question_id': Integer(),
            'question_text': Text(),
            'question_pos': Integer()
        })

    class Meta:
        index = 'slipps'
        doc_type = 'choice'

    def save(self, ** kwargs):
        self.updated_at = datetime.now()
        return super().save(** kwargs)

class TaggedKeyword(DocType):
    language = Nested(Language)
    category = Text(fields={'raw': Keyword()})
    kw_id = Integer()
    content = Text(fields={'raw': Keyword()})
    created_at = Date()
    deleted_at = Date()

    class Meta:
        index = 'slipps'
        doc_type = 'tagged_keyword'

    def save(self, ** kwargs):
        self.created_at = datetime.now()
        return super().save(** kwargs)

class Event(DocType):
    # document = models.ForeignKey(UploadedDocument, on_delete=models.SET_NULL, null=True)
    description = Text()
    why_relevant = Text()
    short_desc = Text()
    language = Nested(Language)
    country = Nested(Country)
    field_of_study = Text(fields={'raw': Keyword()})
    
    details = Nested(
        properties = {
            'question_id': Integer(),
            'question_text': Text(),
            'question_pos': Integer(),
            'answer_id': Integer(),
            'answer_num': Integer(),
            'answer_text': Text()
        })

    keywords = Nested(TaggedKeyword)
    created_at = Date()
    updated_at = Date()
    deleted_at = Date()

    class Meta:
        index = 'slipps'
        doc_type = 'event'

    def save(self, ** kwargs):
        self.updated_at = datetime.now()
        return super().save(** kwargs)


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
