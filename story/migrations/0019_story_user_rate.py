# Generated by Django 4.1.6 on 2023-02-13 23:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('story', '0018_story_number_star_rate'),
    ]

    operations = [
        migrations.AddField(
            model_name='story',
            name='user_rate',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
