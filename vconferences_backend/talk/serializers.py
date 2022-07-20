from talk.models import Talk
from rest_framework import serializers


class TalkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Talk
        fields = ('id', 'title', 'description',
                  'start_time', 'end_time', 'speaker')
