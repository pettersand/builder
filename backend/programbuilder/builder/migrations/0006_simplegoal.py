# Generated by Django 4.2.4 on 2023-12-12 16:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('builder', '0005_remove_clientdata_goals_remove_clientdata_injuries_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='SimpleGoal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('type', models.CharField(choices=[('long', 'Long Term'), ('short', 'Short Term')], max_length=5)),
                ('content', models.CharField(max_length=100)),
                ('status', models.CharField(choices=[('active', 'Active'), ('abandoned', 'Abandoned'), ('completed', 'Completed')], max_length=10)),
                ('goal_date', models.DateField()),
                ('private', models.BooleanField(default=True)),
                ('created_for', models.ForeignKey(default=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_goals', to=settings.AUTH_USER_MODEL), on_delete=django.db.models.deletion.CASCADE, related_name='assigned_goals', to=settings.AUTH_USER_MODEL)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_goals', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]