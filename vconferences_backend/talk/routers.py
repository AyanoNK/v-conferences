from rest_framework import routers

from talk.views import TalkViewSet

router = routers.DefaultRouter(trailing_slash=False)

router.register(r'', TalkViewSet, )
