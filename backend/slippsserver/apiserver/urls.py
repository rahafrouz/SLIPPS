# api/urls.py

from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CountryList

urlpatterns = {
    url(r'^countries/$', CountryList.as_view(), name="create"),
}

urlpatterns = format_suffix_patterns(urlpatterns)
