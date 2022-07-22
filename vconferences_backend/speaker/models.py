from django.db import models

# Create your models here.


class Speaker(models.Model):
    user = models.OneToOneField('custom_auth.User', on_delete=models.CASCADE)
    bio = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
