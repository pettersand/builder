from django.db import models
from django.contrib.auth import get_user_model


class UserProfile(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    date_of_birth = models.DateField(null=True, blank=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    country = models.CharField(max_length=50, null=True, blank=True)
    gender = models.CharField(max_length=10, null=True, blank=True)
    biological_sex = models.CharField(max_length=10, null=True, blank=True)
