from django.db import models
from django.conf import settings


class UserProfile(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="profile"
    )
    date_of_birth = models.DateField(null=True, blank=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    country = models.CharField(max_length=50, null=True, blank=True)
    gender = models.CharField(max_length=10, null=True, blank=True)
    biological_sex = models.CharField(max_length=10, null=True, blank=True)

    def __str__(self):
        return self.user.username
