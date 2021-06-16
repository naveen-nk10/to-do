from django.db import models

# Create your models here.
class Todoreact(models.Model):
    name=models.TextField()
    address=models.TextField()
    phoneno=models.IntegerField()
