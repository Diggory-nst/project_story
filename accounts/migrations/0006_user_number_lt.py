# Generated by Django 4.1.6 on 2023-02-10 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_alter_user_managers'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='number_lt',
            field=models.IntegerField(default=0),
        ),
    ]
