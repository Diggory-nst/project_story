# Generated by Django 4.1.6 on 2023-02-08 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('story', '0009_comment_parent_comment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chapter',
            name='content',
            field=models.TextField(max_length=20000),
        ),
    ]
