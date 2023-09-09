from django.db import models
from uuid import uuid4
from .exercise_compendium import ExerciseCompendium

class ExerciseVariables(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    parent_exercise = models.ForeignKey(ExerciseCompendium, related_name='parent_variables', on_delete=models.CASCADE)
    child_exercise = models.ForeignKey(ExerciseCompendium, related_name='child_variables', on_delete=models.CASCADE)
    default_percentage = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.parent_exercise.name} - {self.child_exercise.name}"
