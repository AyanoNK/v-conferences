from django.shortcuts import render
from speaker.models import Speaker
from speaker.serializers import SpeakerSerializer

from talk.serializers import TalkSerializer
from rest_framework import viewsets, permissions

# Create your views here.


class SpeakerViewSet(viewsets.ModelViewSet):
    queryset = Speaker.objects.all()
    serializer_class = SpeakerSerializer
    permission_classes = [permissions.AllowAny]
