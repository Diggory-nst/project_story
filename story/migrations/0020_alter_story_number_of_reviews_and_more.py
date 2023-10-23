# Generated by Django 4.1.6 on 2023-02-14 00:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('story', '0019_story_user_rate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='story',
            name='number_of_reviews',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='story',
            name='number_star_rate',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='story',
            name='rating_score',
            field=models.IntegerField(default=0),
        ),
    ]
