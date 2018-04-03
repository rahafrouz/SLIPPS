# api/urls.py

from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CountryList, SearchByKeyword

urlpatterns = {
    url(r'^countries/$', CountryList.as_view(), name="create"),
    url(r'^api/search$', SearchByKeyword.as_view()),
}

urlpatterns = format_suffix_patterns(urlpatterns)
