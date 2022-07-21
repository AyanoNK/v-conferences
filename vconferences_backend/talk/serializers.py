from custom_auth.models import User
from speaker.serializers import SpeakerSerializer
from talk.models import Talk, TalkAttendee
from rest_framework import serializers


class AttendeeSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    def get_name(self, obj):
        return obj.get_full_name()

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['company'] = instance.company.name
        return data

    class Meta:
        model = User
        fields = ('name', 'company')


class TalkAttendeeSerializer(serializers.ModelSerializer):

    attendee = AttendeeSerializer(many=False, read_only=True)

    class Meta:
        model = TalkAttendee
        fields = ('attendee',)


class TalkSerializer(serializers.ModelSerializer):
    attendees = serializers.SerializerMethodField()

    def get_attendees(self, obj):
        attendees = TalkAttendee.objects.filter(talk=obj)
        return TalkAttendeeSerializer(
            attendees, many=True, read_only=True).data

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['speaker'] = SpeakerSerializer(instance.speaker).data
        return data

    class Meta:
        model = Talk
        fields = ('id', 'title', 'abstract', 'attendees',
                  'speaker', 'room', 'created_at', 'updated_at')
