from django.db import models
from uuid import uuid4
from django.contrib.postgres.fields import JSONField
from .user import User
from .programs import Programs
from .sessions import Sessions

class History(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user = models.ForeignKey(User, related_name='history', on_delete=models.CASCADE)
    program = models.ForeignKey(Programs, related_name='history', null=True, blank=True, on_delete=models.SET_NULL)
    session = models.ForeignKey(Sessions, related_name='history', null=True, blank=True, on_delete=models.SET_NULL)
    program_data = JSONField(null=True, blank=True)
    session_data = JSONField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"History - {self.user.username}"
