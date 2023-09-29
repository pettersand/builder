from django.test import SimpleTestCase
from django.urls import reverse, resolve
from builder.views import (
    RegisterStep2View,
    RegisterStep1View,
    CheckAuthStatus,
    LoginView,
    LogoutView,
)


class TestUrls(SimpleTestCase):
    def test_register(self):
        url = reverse("register_step_2")
        self.assertEqual(resolve(url).func.view_class, RegisterStep2View)

    def test_step1(self):
        url = reverse("register_step_1")
        self.assertEqual(resolve(url).func.view_class, RegisterStep1View)

    def test_check_auth(self):
        url = reverse("check_auth_status")
        self.assertEqual(resolve(url).func.view_class, CheckAuthStatus)

    def test_logout(self):
        url = reverse("logout")
        self.assertEqual(resolve(url).func.view_class, LogoutView)

    def test_login(self):
        url = reverse("login")
        self.assertEqual(resolve(url).func.view_class, LoginView)
