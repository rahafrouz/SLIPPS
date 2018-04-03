from elasticsearch_dsl import FacetedSearch, TermsFacet
from elasticsearch import Elasticsearch

class EventSearch(FacetedSearch):
    index = 'slipps'
    doc_types = ['Event', ]
    # fields that should be searched
    fields = ['keywords', 'content']

    facets = {
        # use bucket aggregations to define facets
        'keywords': TermsFacet(field='keywords')
    }

    def search(self):
        # override methods to add custom pieces
        s = super().search()
        return s