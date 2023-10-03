from django.http import JsonResponse
from django.views import View
from builder.models import OfficialBeginnerTemplate


class OfficialTemplateList(View):
    def get(self, request):
        level = request.GET.get("level", "all")
        training_days = request.GET.get("trainingDays", "all")
        exercises_per_day = request.GET.get("exercisesPerDay", "all")

        query = OfficialBeginnerTemplate.objects.all()

        if level != "all":
            query = query.filter(level=level)
        if training_days != "all":
            query = query.filter(training_days=training_days)
        if exercises_per_day != "all":
            query = query.filter(exercises_per_day=exercises_per_day)

        serialized_data = [
            {
                "name": template.name,
                "description": template.description,
                "training_days": template.training_days,
                "exercises_per_day": template.exercises_per_day,
                "sessions": template.sessions,
                "blocks": template.blocks,
            }
            for template in query
        ]

        return JsonResponse({"templates": serialized_data})
