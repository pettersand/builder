from django.db import models
from uuid import uuid4
from .user import User

class LayoutTemplates(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    warmup_count = models.IntegerField()
    power_count = models.IntegerField()
    strength_count = models.IntegerField()
    hypertrophy_count = models.IntegerField()
    accessory_count = models.IntegerField()
    plyometric_count = models.IntegerField()
    circuit_count = models.IntegerField()
    cooldown_count = models.IntegerField()
    user = models.ForeignKey(User, related_name='layout_templates', null=True, blank=True, on_delete=models.SET_NULL)
    LEVEL_CHOICES = [
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Expert', 'Expert'),
    ]
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES)

    def __str__(self):
        return self.name
