from django.db import models
from django.forms import CharField

from speaker.models import Speaker
from custom_auth.models import User

# Create your models here.


class Talk(models.Model):
    title = models.CharField(max_length=255)
    abstract = models.TextField()
    speaker = models.ForeignKey(Speaker, on_delete=models.CASCADE)
    room = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class TalkAttendee(models.Model):
    talk = models.ForeignKey(Talk, on_delete=models.CASCADE)
    attendee = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
