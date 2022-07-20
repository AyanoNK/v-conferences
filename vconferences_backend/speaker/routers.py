from rest_framework import routers

from speaker.views import SpeakerViewSet

router = routers.DefaultRouter(trailing_slash=False)

router.register(r'', SpeakerViewSet)
