from speaker.serializers import SpeakerSerializer
from talk.models import Talk
from rest_framework import serializers


class TalkSerializer(serializers.ModelSerializer):

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['speaker'] = SpeakerSerializer(instance.speaker).data
        return data

    class Meta:
        model = Talk
        fields = ('id', 'title', 'abstract',
                  'speaker', 'room', 'created_at', 'updated_at')
