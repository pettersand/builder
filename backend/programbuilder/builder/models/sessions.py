from django.db import models
from uuid import uuid4
from django.contrib.postgres.fields import JSONField
from .programs import Programs

class Sessions(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    program = models.ForeignKey(Programs, related_name='sessions', on_delete=models.CASCADE)
    session_number = models.IntegerField()
    session_date = models.DateField(null=True, blank=True)
    TEMPLATE_TYPE_CHOICES = [
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('expert', 'Expert'),
    ]
    template_type = models.CharField(max_length=20, choices=TEMPLATE_TYPE_CHOICES)
    json_data = JSONField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Session {self.session_number} - {self.program.name}"
