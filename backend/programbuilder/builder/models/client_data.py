from django.db import models
from django.conf import settings
from .trainer_client import TrainerClient


class ClientGoals(models.Model):
    trainer_client = models.ForeignKey(
        "TrainerClient", on_delete=models.CASCADE, related_name="goals"
    )
    content = models.TextField()
    goal_type = models.CharField(
        max_length=7,
        choices=[
            ("long", "Long"),
            ("med", "Medium"),
            ("short", "Short"),
        ],
    )
    date_created = models.DateTimeField(auto_now_add=True)
    goal_date = models.DateField()
    status = models.CharField(
        max_length=10,
        choices=[
            ("active", "Active"),
            ("abandoned", "Abandoned"),
            ("complete", "Complete"),
        ],
        default="active",
    )

    class Meta:
        ordering = ["goal_date"]

    def __str__(self):
        return f"{self.get_goal_type_display()} goal for {self.trainer_client.client.username}"


class ClientInjuries(models.Model):
    INJURY_TYPE_CHOICES = [
        ("sprain", "Sprain"),
        ("strain", "Strain"),
        ("fracture", "Fracture"),
        ("dislocation", "Dislocation"),
        ("tendonitis", "Tendonitis"),
        ("bursitis", "Bursitis"),
        ("disc herniation", "Disc Herniation"),
        ("other", "Other"),
    ]
    INJURY_STATUS_CHOICES = [
        ("active", "Active"),
        ("healed", "Healed"),
        ("severe", "Severe"),
        ("chronic", "Chronic"),
        ("other", "Other"),
    ]
    INJURY_SITE_CHOICES = [
        ("head", "Head"),
        ("neck", "Neck"),
        ("shoulder", "Shoulder"),
        ("elbow", "Elbow"),
        ("wrist", "Wrist"),
        ("hand", "Hand"),
        ("hip", "Hip"),
        ("back", "Back"),
        ("chest", "Chest"),
        ("abdomen", "Abdomen"),
        ("upper_back", "Upper Back"),
        ("lower_back", "Lower Back"),
        ("groin", "Groin"),
        ("thigh", "Thigh"),
        ("hamstring", "Hamstring"),
        ("knee", "Knee"),
        ("ankle", "Ankle"),
        ("foot", "Foot"),
        ("other", "Other"),
    ]
    INJURY_LATERALITY_CHOICES = [
        ("left", "Left"),
        ("right", "Right"),
        ("both", "Both"),
    ]

    trainer_client = models.ForeignKey(
        "TrainerClient", on_delete=models.CASCADE, related_name="injuries"
    )
    injury_name = models.CharField(max_length=50)
    injury_type = models.CharField(max_length=50, choices=INJURY_TYPE_CHOICES)
    site = models.CharField(max_length=50, choices=INJURY_SITE_CHOICES, default="other")
    laterality = models.CharField(
        max_length=10, choices=INJURY_LATERALITY_CHOICES, default="both"
    )
    date_of_injury = models.DateField()
    pain_when = models.TextField()
    status = models.CharField(max_length=50, choices=INJURY_STATUS_CHOICES)
    notes = models.TextField(blank=True, null=True)

    class Meta:
        ordering = ["-date_of_injury"]

    def __str__(self):
        return f"{self.injury_name} - {self.get_status_display()}"


class ClientPreferences(models.Model):
    trainer_client = models.ForeignKey(
        TrainerClient, on_delete=models.CASCADE, related_name="preferences"
    )
    details = models.JSONField(default=dict)

    def __str__(self):
        return f"Preferences for {self.trainer_client.client.username}"


class ClientNotes(models.Model):
    trainer_client = models.ForeignKey(
        TrainerClient, on_delete=models.CASCADE, related_name="client_notes"
    )
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    related_program = models.ForeignKey(
        "Program", on_delete=models.SET_NULL, null=True, blank=True
    )

    def __str__(self):
        return f"Note for {self.trainer_client.trainer.username} by {self.trainer_client.client.username}"


class ClientData(models.Model):
    trainer_client = models.OneToOneField(
        TrainerClient, on_delete=models.CASCADE, related_name="client_data"
    )
    goals = models.ForeignKey(ClientGoals, on_delete=models.SET_NULL, null=True)
    injuries = models.ForeignKey(ClientInjuries, on_delete=models.SET_NULL, null=True)
    preferences = models.ForeignKey(
        ClientPreferences, on_delete=models.SET_NULL, null=True
    )
    notes = models.ForeignKey(ClientNotes, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f"Data for {self.trainer_client.client.username}"
