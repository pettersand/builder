from django.db import models


class OfficialBeginnerTemplate(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    training_days = models.IntegerField()
    exercises_per_day = models.IntegerField()
    sessions = models.IntegerField()
    blocks = models.IntegerField()

    def __str__(self):
        return self.name
