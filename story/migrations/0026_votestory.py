# Generated by Django 4.1.6 on 2023-02-16 17:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('story', '0025_alter_comment_number_reply'),
    ]

    operations = [
        migrations.CreateModel(
            name='VoteStory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_story', models.CharField(max_length=100)),
                ('number_vote', models.IntegerField()),
            ],
        ),
    ]