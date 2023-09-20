# urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from builder.views import RegisterStep1View, RegisterStep2View, check_auth_status, logout_view


# The API URLs are now determined automatically by the router.
urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/register_step_1/", RegisterStep1View.as_view(), name="register_step_1"),
    path("api/register_step_2/", RegisterStep2View.as_view(), name="register_step_2"),
    path("api/check_auth_status/", check_auth_status, name="check_auth_status"),
    path("api/logout/", logout_view, name="logout"),
]
