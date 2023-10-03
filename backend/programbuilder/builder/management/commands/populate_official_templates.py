from django.core.management.base import BaseCommand
import json
from builder.models import OfficialBeginnerTemplate


class Command(BaseCommand):
    help = "Populate database with official beginner templates"

    def handle(self, *args, **kwargs):
        with open(
            "builder/management/files/official_beginner_templates.json", "r"
        ) as file:
            templates = json.load(file)
            for template in templates:
                if not OfficialBeginnerTemplate.objects.filter(
                    name=template["name"]
                ).exists():
                    OfficialBeginnerTemplate.objects.create(
                        name=template["name"],
                        description=template["description"],
                        training_days=template["training_days"],
                        exercises_per_day=template["exercises_per_day"],
                        sessions=template["sessions"],
                        blocks=template["blocks"],
                    )
        self.stdout.write(self.style.SUCCESS("Successfully populated database"))
