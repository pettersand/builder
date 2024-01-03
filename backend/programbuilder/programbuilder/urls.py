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
    ClientDataView,
    ClientInjuriesView,
    ClientNotesView,
    ClientPreferencesView,
    CreateProgramView,
    NewSimpleGoal,
    FetchGoals,
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
    path("api/client_notes/", ClientNotesView.as_view(), name="client_notes"),
    path("api/client_injuries/", ClientInjuriesView.as_view(), name="client_injuries"),
    path(
        "api/client_preferences/",
        ClientPreferencesView.as_view(),
        name="client_preferences",
    ),
    path("api/client_data/", ClientDataView.as_view(), name="client_data"),
    path("api/create_program/", CreateProgramView.as_view(), name="create_program"),
    path("api/new_simple_goal/", NewSimpleGoal.as_view(), name="new_simple_goal"),
    path("api/get_goals/", FetchGoals.as_view(), name="get_goals"),
]
