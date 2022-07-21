# Generated by Django 4.0.6 on 2022-07-21 02:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('talk', '0002_rename_description_talk_abstract_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='TalkAttendee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('attendee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('talk', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='talk.talk')),
            ],
        ),
    ]
