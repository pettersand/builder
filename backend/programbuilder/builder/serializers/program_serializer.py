from rest_framework import serializers
from builder.models import Program


class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = [
            "creator",
            "user",
            "created_at",
            "updated_at",
            "status",
            "program_data",
        ]

    def create(self, validated_data):
        return Program.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.status = validated_data.get("status", instance.status)
        instance.program_data = validated_data.get(
            "program_data", instance.program_data
        )
        instance.save()
        return instance
