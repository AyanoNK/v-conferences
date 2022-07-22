
from talk.models import Talk
from talk.serializers import TalkSerializer
from rest_framework import viewsets, permissions

from rest_framework import filters


# Create your views here.


class TalkViewSet(viewsets.ModelViewSet):
    queryset = Talk.objects.all()
    serializer_class = TalkSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'abstract', 'room']
