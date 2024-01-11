from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from builder.models import User, Role, UserRole, UserProfile


class UserViewsTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(
            username="testuser", email="test@email.com", password="testpass"
        )
        self.client.force_authenticate(user=self.user)

    def test_check_auth_status_authenticated(self):
        response = self.client.get(reverse("check_auth_status"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), {"isAuthenticated": True, "roles": [], "userId": str(self.user.id)})

    def test_check_auth_status_unauthenticated(self):
        self.client.logout()
        response = self.client.get(reverse("check_auth_status"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), {"isAuthenticated": False})

    def test_logout(self):
        response = self.client.post(reverse("logout"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), {"message": "Logged out successfully"})


class RegistrationViewsTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        Role.objects.create(name="Trainer")
        Role.objects.create(name="Client")
        Role.objects.create(name="Solo")

        User.objects.create_user(
            username="existinguser",
            email="existing@example.com",
            password="existingpassword",
        )

        self.step1_data = {
            "username": "newuser",
            "email": "newuser@example.com",
            "password": "Newpass1.",
            "confirmPassword": "Newpass1.",
        }
        self.step2_data = {
            "firstName": "John",
            "lastName": "Doe",
            "dob": "1990-01-01",
            "country": "NOR",
            "gender": "Male",
            "bioSex": "Male",
            "isTrainer": True,
            "hasTrainer": False,
            "terms": True,
        }

    def test_register_step_1_valid(self):
        url = reverse("register_step_1")
        data = self.step1_data
        response = self.client.post(url, {'step1': self.step1_data}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            response.json(), {"message": "Data is valid, proceed to step 2"}
        )

    def test_register_step_1_existing_user(self):
        url = reverse("register_step_1")
        self.step1_data["username"] = "existinguser"
        data = self.step1_data
        response = self.client.post(url, {'step1': self.step1_data}, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(
            response.json(), {"username": "A user with that username already exists"}
        )

    def test_register_step_1_existing_email(self):
        url = reverse("register_step_1")
        self.step1_data["email"] = "existing@example.com"
        data = self.step1_data
        response = self.client.post(url, {'step1': self.step1_data}, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(
            response.json(), {"email": "A user with that email already exists"}
        )

    def test_register_step_1_invalid(self):
        url = reverse("register_step_1")
        self.step1_data["password"] = " "
        data = self.step1_data
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_step_2_valid(self):
        url = reverse("register_step_2")
        data = {"step1": self.step1_data, "step2": self.step2_data}
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            response.json(), {"message": "Data is valid, registration complete"}
        )

    def test_register_step_2_terms_invalid(self):
        url = reverse("register_step_2")
        self.step2_data["terms"] = False
        data = {"step1": self.step1_data, "step2": self.step2_data}
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("terms", response.data.get("step2", {}))

    def test_added_to_user_profile(self):
        url = reverse("register_step_2")
        data = {"step1": self.step1_data, "step2": self.step2_data}
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        user = User.objects.get(username=self.step1_data["username"])
        user_profile = UserProfile.objects.get(user=user)

        self.assertIsNotNone(user_profile)
        self.assertEqual(user_profile.country, self.step2_data["country"])
        self.assertEqual(user_profile.gender, self.step2_data["gender"])
        self.assertEqual(user_profile.biological_sex, self.step2_data["bioSex"])

    def test_role_assignment(self):
        url = reverse("register_step_2")
        data = {"step1": self.step1_data, "step2": self.step2_data}
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        user = User.objects.get(username=self.step1_data["username"])
        user_role = UserRole.objects.get(user=user)
        self.assertIsNotNone(user_role)
        self.assertEqual(user_role.role.name, "Trainer")
