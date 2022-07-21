from speaker.models import Speaker
from rest_framework import serializers


class SpeakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Speaker
        fields = ('bio', 'created_at', 'updated_at')
