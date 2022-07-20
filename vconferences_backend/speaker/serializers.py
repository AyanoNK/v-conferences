from talk.models import Talk
from rest_framework import serializers


class SpeakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Talk
        fields = ('name', 'created_at')
