from django.db import models
from uuid import uuid4
from .user import User

class Programs(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user = models.ForeignKey(User, related_name='programs', on_delete=models.CASCADE)
    name = models.TextField()
    duration_weeks = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} - {self.user.username}"
