# api/urls.py

from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.routers import SimpleRouter
from .views import (
	SearchByKeywordView,
	AdvancedSearchView,
	UserRegistrationView,
	InitializeView,
	DocumentUploadView,
)

router = SimpleRouter()
# router.register(r'users', UserViewSet)

urlpatterns = {
    url(r'^api/init$', InitializeView.as_view()),
    url(r'^api/search$', SearchByKeywordView.as_view()),
    url(r'^api/advanced-search$', AdvancedSearchView.as_view()),
    url(r'^api/users/register', UserRegistrationView.as_view()),
    url(r'^api/users/upload/(?P<filename>[^/]+)$', DocumentUploadView.as_view()),
    url(r'^api/auth/', include('rest_auth.urls')),
}

urlpatterns = format_suffix_patterns(urlpatterns)
