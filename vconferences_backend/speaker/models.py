from django.db import models

# Create your models here.


class Speaker(models.Model):
    name = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    bio = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
