from django.db import models
from uuid import uuid4
from .user import User
from .programs import Programs

class Calendar(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user = models.ForeignKey(User, related_name='calendar_events', on_delete=models.CASCADE)
    trainer = models.ForeignKey(User, related_name='trainer_calendar_events', null=True, blank=True, on_delete=models.SET_NULL)
    EVENT_TYPE_CHOICES = [
        ('Planned Session', 'Planned Session'),
        ('PT Session', 'PT Session'),
        ('Bookable', 'Bookable'),
    ]
    event_type = models.CharField(max_length=20, choices=EVENT_TYPE_CHOICES)
    event_date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    program = models.ForeignKey(Programs, related_name='calendar_events', null=True, blank=True, on_delete=models.SET_NULL)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.event_type} - {self.user.username}"
