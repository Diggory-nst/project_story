# Generated by Django 4.1.6 on 2023-02-17 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('story', '0028_alter_votestory_name_story'),
    ]

    operations = [
        migrations.AddField(
            model_name='votestory',
            name='user_voted',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
