from rest_framework import serializers
from .models import Todoreact


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Todoreact
        fields=('name','address','phoneno')