from django.shortcuts import render
from rest_framework import generics
from .serializer import *
from .models import *

# Create your views here.
class index(generics.ListAPIView):
    queryset= Machine.objects.all()
    serializer_class= MachineSerializer
