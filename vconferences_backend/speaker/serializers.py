from speaker.models import Speaker
from rest_framework import serializers


class SpeakerSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    email = serializers.EmailField(source='user.email')

    def get_name(self, obj):
        return obj.user.get_full_name()

    class Meta:
        model = Speaker
        fields = ('bio', 'name', 'email')
