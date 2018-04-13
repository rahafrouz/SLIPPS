# api/urls.py

from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import SearchByKeyword, AdvancedSearch, UserViewSet
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register(r'users', UserViewSet)

urlpatterns = {
    url(r'^api/search$', SearchByKeyword.as_view()),
    url(r'^api/advanced-search$', AdvancedSearch.as_view()),
    url(r'^api/', include(router.urls)),
}

urlpatterns = format_suffix_patterns(urlpatterns)
