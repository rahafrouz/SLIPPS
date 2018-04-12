# api/urls.py

from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import SearchByKeyword, AdvancedSearch

urlpatterns = {
    url(r'^api/search$', SearchByKeyword.as_view()),
    url(r'^api/advanced-search$', AdvancedSearch.as_view()),
}

urlpatterns = format_suffix_patterns(urlpatterns)
