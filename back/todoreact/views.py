from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todoreact

class Todoview(viewsets.ModelViewSet):
    serializer_class=TodoSerializer
    queryset=Todoreact.objects.all()