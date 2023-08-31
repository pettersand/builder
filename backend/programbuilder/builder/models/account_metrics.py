from django.db import models
from uuid import uuid4
from .user import User

class AccountMetrics(models.Model):
    user = models.OneToOneField(User, related_name='account_metrics', on_delete=models.CASCADE, primary_key=True)
    total_visits = models.IntegerField(default=0)
    last_login = models.DateTimeField(null=True, blank=True)
    total_programs_created = models.IntegerField(default=0)
    total_sessions_attended = models.IntegerField(default=0)
    total_goals_set = models.IntegerField(default=0)
    exercises_completed = models.IntegerField(default=0)
    goals_reached = models.IntegerField(default=0)
    sessions_completed = models.IntegerField(default=0)
    programs_completed = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Metrics for {self.user.username}"