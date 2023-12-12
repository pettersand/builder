from django.db import models
from django.conf import settings


class SimpleGoal(models.Model):
    user_id = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="created_goals"
    )
    created_for = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="assigned_goals",
        default=user_id,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    GOAL_TYPE_CHOICES = [
        ("long", "Long Term"),
        ("short", "Short Term"),
    ]
    type = models.CharField(max_length=5, choices=GOAL_TYPE_CHOICES)
    content = models.CharField(max_length=100)
    GOAL_STATUS_CHOICES = [
        ("active", "Active"),
        ("abandoned", "Abandoned"),
        ("completed", "Completed"),
    ]
    status = models.CharField(max_length=10, choices=GOAL_STATUS_CHOICES)
    goal_date = models.DateField()
    private = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.type} goal for {self.created_for.username} by {self.user_id.username}"
