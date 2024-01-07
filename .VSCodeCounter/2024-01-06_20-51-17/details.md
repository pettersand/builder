# Details

Date : 2024-01-06 20:51:17

Directory c:\\Development\\Projects\\builder\\backend\\programbuilder\\builder

Total : 43 files,  1360 codes, 19 comments, 266 blanks, all 1645 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [backend/programbuilder/builder/__init__.py](/backend/programbuilder/builder/__init__.py) | Python | 0 | 0 | 1 | 1 |
| [backend/programbuilder/builder/admin.py](/backend/programbuilder/builder/admin.py) | Python | 41 | 0 | 4 | 45 |
| [backend/programbuilder/builder/apps.py](/backend/programbuilder/builder/apps.py) | Python | 4 | 0 | 3 | 7 |
| [backend/programbuilder/builder/management/commands/__init__.py](/backend/programbuilder/builder/management/commands/__init__.py) | Python | 0 | 0 | 1 | 1 |
| [backend/programbuilder/builder/management/commands/populate_official_templates.py](/backend/programbuilder/builder/management/commands/populate_official_templates.py) | Python | 23 | 0 | 4 | 27 |
| [backend/programbuilder/builder/management/files/official_beginner_templates.json](/backend/programbuilder/builder/management/files/official_beginner_templates.json) | JSON | 26 | 0 | 0 | 26 |
| [backend/programbuilder/builder/migrations/0001_initial.py](/backend/programbuilder/builder/migrations/0001_initial.py) | Python | 143 | 1 | 7 | 151 |
| [backend/programbuilder/builder/migrations/0002_rename_clientnote_trainernote.py](/backend/programbuilder/builder/migrations/0002_rename_clientnote_trainernote.py) | Python | 11 | 1 | 6 | 18 |
| [backend/programbuilder/builder/migrations/0003_clientpreferences_clientnotes_clientinjuries_and_more.py](/backend/programbuilder/builder/migrations/0003_clientpreferences_clientnotes_clientinjuries_and_more.py) | Python | 70 | 1 | 6 | 77 |
| [backend/programbuilder/builder/migrations/0004_alter_clientgoals_goal_type.py](/backend/programbuilder/builder/migrations/0004_alter_clientgoals_goal_type.py) | Python | 12 | 1 | 6 | 19 |
| [backend/programbuilder/builder/migrations/0005_remove_clientdata_goals_remove_clientdata_injuries_and_more.py](/backend/programbuilder/builder/migrations/0005_remove_clientdata_goals_remove_clientdata_injuries_and_more.py) | Python | 43 | 1 | 6 | 50 |
| [backend/programbuilder/builder/migrations/0006_simplegoal.py](/backend/programbuilder/builder/migrations/0006_simplegoal.py) | Python | 24 | 1 | 6 | 31 |
| [backend/programbuilder/builder/migrations/__init__.py](/backend/programbuilder/builder/migrations/__init__.py) | Python | 0 | 0 | 1 | 1 |
| [backend/programbuilder/builder/models/__init__.py](/backend/programbuilder/builder/models/__init__.py) | Python | 12 | 0 | 1 | 13 |
| [backend/programbuilder/builder/models/account_metrics.py](/backend/programbuilder/builder/models/account_metrics.py) | Python | 22 | 0 | 4 | 26 |
| [backend/programbuilder/builder/models/client_data.py](/backend/programbuilder/builder/models/client_data.py) | Python | 120 | 0 | 19 | 139 |
| [backend/programbuilder/builder/models/client_note.py](/backend/programbuilder/builder/models/client_note.py) | Python | 13 | 1 | 4 | 18 |
| [backend/programbuilder/builder/models/goals.py](/backend/programbuilder/builder/models/goals.py) | Python | 30 | 0 | 4 | 34 |
| [backend/programbuilder/builder/models/official_templates.py](/backend/programbuilder/builder/models/official_templates.py) | Python | 10 | 0 | 4 | 14 |
| [backend/programbuilder/builder/models/program.py](/backend/programbuilder/builder/models/program.py) | Python | 20 | 0 | 4 | 24 |
| [backend/programbuilder/builder/models/role.py](/backend/programbuilder/builder/models/role.py) | Python | 8 | 0 | 2 | 10 |
| [backend/programbuilder/builder/models/trainer_client.py](/backend/programbuilder/builder/models/trainer_client.py) | Python | 23 | 0 | 5 | 28 |
| [backend/programbuilder/builder/models/user.py](/backend/programbuilder/builder/models/user.py) | Python | 48 | 0 | 10 | 58 |
| [backend/programbuilder/builder/models/user_profile.py](/backend/programbuilder/builder/models/user_profile.py) | Python | 13 | 0 | 4 | 17 |
| [backend/programbuilder/builder/models/user_role.py](/backend/programbuilder/builder/models/user_role.py) | Python | 13 | 0 | 5 | 18 |
| [backend/programbuilder/builder/models/user_template_selection.py](/backend/programbuilder/builder/models/user_template_selection.py) | Python | 19 | 0 | 3 | 22 |
| [backend/programbuilder/builder/serializers/__init__.py](/backend/programbuilder/builder/serializers/__init__.py) | Python | 11 | 0 | 1 | 12 |
| [backend/programbuilder/builder/serializers/client_serializer.py](/backend/programbuilder/builder/serializers/client_serializer.py) | Python | 35 | 0 | 13 | 48 |
| [backend/programbuilder/builder/serializers/goals_serializer.py](/backend/programbuilder/builder/serializers/goals_serializer.py) | Python | 23 | 1 | 9 | 33 |
| [backend/programbuilder/builder/serializers/program_serializer.py](/backend/programbuilder/builder/serializers/program_serializer.py) | Python | 20 | 0 | 5 | 25 |
| [backend/programbuilder/builder/serializers/trainer_serializer.py](/backend/programbuilder/builder/serializers/trainer_serializer.py) | Python | 14 | 0 | 6 | 20 |
| [backend/programbuilder/builder/serializers/user_serializer.py](/backend/programbuilder/builder/serializers/user_serializer.py) | Python | 52 | 1 | 16 | 69 |
| [backend/programbuilder/builder/tests/__init__.py](/backend/programbuilder/builder/tests/__init__.py) | Python | 0 | 0 | 2 | 2 |
| [backend/programbuilder/builder/tests/test_urls.py](/backend/programbuilder/builder/tests/test_urls.py) | Python | 25 | 0 | 7 | 32 |
| [backend/programbuilder/builder/tests/views/__init__.py](/backend/programbuilder/builder/tests/views/__init__.py) | Python | 0 | 0 | 1 | 1 |
| [backend/programbuilder/builder/tests/views/test_user_views.py](/backend/programbuilder/builder/tests/views/test_user_views.py) | Python | 120 | 0 | 21 | 141 |
| [backend/programbuilder/builder/views/__init__.py](/backend/programbuilder/builder/views/__init__.py) | Python | 18 | 0 | 1 | 19 |
| [backend/programbuilder/builder/views/client_views.py](/backend/programbuilder/builder/views/client_views.py) | Python | 72 | 3 | 20 | 95 |
| [backend/programbuilder/builder/views/goal_views.py](/backend/programbuilder/builder/views/goal_views.py) | Python | 36 | 1 | 5 | 42 |
| [backend/programbuilder/builder/views/official_templates_views.py](/backend/programbuilder/builder/views/official_templates_views.py) | Python | 27 | 0 | 7 | 34 |
| [backend/programbuilder/builder/views/program_views.py](/backend/programbuilder/builder/views/program_views.py) | Python | 14 | 0 | 3 | 17 |
| [backend/programbuilder/builder/views/trainer_views.py](/backend/programbuilder/builder/views/trainer_views.py) | Python | 11 | 1 | 3 | 15 |
| [backend/programbuilder/builder/views/user_views.py](/backend/programbuilder/builder/views/user_views.py) | Python | 134 | 5 | 26 | 165 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)