# Generated by Django 4.0.6 on 2022-07-21 02:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('custom_auth', '0002_user_bio'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='bio',
        ),
    ]
