from django.urls import include, re_path


from talk.routers import router

urlpatterns = [
    re_path(r'^', include(router.urls)),
]
