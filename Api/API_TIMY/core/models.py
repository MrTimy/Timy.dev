from django.db import models

# Create your models here.
class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    fullname = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, unique=True)
    subject = models.CharField(max_length=50)
    comment = models.TextField (max_length=255, blank=True)


