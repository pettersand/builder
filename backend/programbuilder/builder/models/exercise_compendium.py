from django.db import models
from uuid import uuid4

class ExerciseCompendium(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=255, blank=True, null=True)
    parent = models.ForeignKey('self', related_name='children', on_delete=models.SET_NULL, null=True, blank=True)
    parent_percentage = models.IntegerField(default=100)
    equipment = models.CharField(max_length=255, blank=True, null=True)
    rounding_to = models.FloatField(default=2.5)
    is_bilateral = models.BooleanField(default=True)
    is_unilateral = models.BooleanField(default=False)
    upper_lower_body = models.CharField(max_length=50, blank=True, null=True)
    push_pull = models.CharField(max_length=50, blank=True, null=True)
    vertical_horizontal = models.CharField(max_length=50, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name or ''