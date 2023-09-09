from django.db import models
from uuid import uuid4
from .user import User

class Goals(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user = models.ForeignKey(User, related_name='goals', on_delete=models.CASCADE)
    GOAL_TYPE_CHOICES = [
        ('short_term', 'Short Term'),
        ('medium_term', 'Medium Term'),
        ('long_term', 'Long Term'),
    ]
    goal_type = models.CharField(max_length=20, choices=GOAL_TYPE_CHOICES)
    CATEGORY_CHOICES = [
        ('frequency', 'Frequency'),
        ('fat_loss', 'Fat Loss'),
        ('muscle_gain', 'Muscle Gain'),
        ('strength', 'Strength'),
    ]
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    description = models.TextField()
    target_value = models.FloatField()
    UNIT_CHOICES = [
        ('kg', 'Kg'),
        ('lbs', 'Lbs'),
        ('sessions', 'Sessions'),
        ('weeks', 'Weeks'),
    ]
    unit = models.CharField(max_length=10, choices=UNIT_CHOICES)
    start_date = models.DateField()
    end_date = models.DateField()
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('achieved', 'Achieved'),
        ('failed', 'Failed'),
    ]
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.goal_type} - {self.user.username}"
