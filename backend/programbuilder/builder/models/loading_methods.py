from django.db import models
from uuid import uuid4
from django.db.models import JSONField
from .user import User

class LoadingMethods(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    TYPE_CHOICES = [
        ('Strength', 'Strength'),
        ('Volume', 'Volume'),
        ('Hypertrophy', 'Hypertrophy'),
        ('Fat Loss', 'Fat Loss'),
        ('Accessory', 'Accessory'),
        ('Power', 'Power'),
    ]
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    PHASE_CHOICES = [
        ('Loading', 'Loading'),
        ('Recovery', 'Recovery'),
        ('Volume', 'Volume'),
        ('Strength', 'Strength'),
    ]
    phase = models.CharField(max_length=20, choices=PHASE_CHOICES)
    user = models.ForeignKey(User, related_name='loading_methods', null=True, blank=True, on_delete=models.SET_NULL)
    LEVEL_CHOICES = [
        ('Intermediate', 'Intermediate'),
        ('Expert', 'Expert'),
    ]
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES)
    parameters = JSONField()

    def __str__(self):
        return self.name
