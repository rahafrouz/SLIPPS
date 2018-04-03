# To declare objects used as model -*-
from datetime import datetime

class SearchResult(object):
    def __init__(self, description, short_desc, language, country, created):
        self.description = description
        self.short_desc = short_desc
        self.language = language or "English"
        self.country = country or "Finland"
        self.created = created or datetime.now()
