# api/urls.py

from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import SearchByKeywordView, AdvancedSearchView, UserRegistrationView
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
# router.register(r'users', UserViewSet)

urlpatterns = {
    url(r'^api/search$', SearchByKeywordView.as_view()),
    url(r'^api/advanced-search$', AdvancedSearchView.as_view()),
    url(r'^api/users/register', UserRegistrationView.as_view()),
    url(r'^api/auth/', include('rest_auth.urls')),
}

urlpatterns = format_suffix_patterns(urlpatterns)
