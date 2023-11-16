# urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from builder.views import (
    RegisterStep1View,
    RegisterStep2View,
    CheckAuthStatus,
    LogoutView,
    LoginView,
    OfficialTemplateList,
    TrainerClientsView,
    ClientGoalView,
)


# The API URLs are now determined automatically by the router.
urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/register_step_1/", RegisterStep1View.as_view(), name="register_step_1"),
    path("api/register_step_2/", RegisterStep2View.as_view(), name="register_step_2"),
    path("api/check_auth_status/", CheckAuthStatus.as_view(), name="check_auth_status"),
    path("api/logout/", LogoutView.as_view(), name="logout"),
    path("api/login/", LoginView.as_view(), name="login"),
    path(
        "api/official_templates/",
        OfficialTemplateList.as_view(),
        name="official_templates",
    ),
    path("api/trainer_clients/", TrainerClientsView.as_view(), name="trainer_clients"),
    path("api/client_goals/", ClientGoalView.as_view(), name="client_goals"),
]
