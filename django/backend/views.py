from rest_framework.permissions import AllowAny
from django.shortcuts import render
from rest_framework import generics
from .serializer import *
from .models import *

# Create your views here.
class index(generics.ListCreateAPIView):
    queryset= Machine.objects.all()
    serializer_class= MachineSerializer


class SingleProduct(generics.RetrieveAPIView):
    queryset = Machine.objects.all()
    serializer_class = MachineSerializer
    lookup_field = 'uu_id'

class CreateCategory(generics.CreateAPIView):
    queryset= MachineCategory.objects.all()
    serializer_class= CategorySerializer

class CreateBrand(generics.ListCreateAPIView):
    queryset= MachineBrand.objects.all()
    serializer_class= BrandSerializer

# from rest_framework import generics

# class Index(generics.ListCreateAPIView):
#     queryset = Machine.objects.all()
#     serializer_class = MachineSerializer

#     def perform_create(self, serializer):
#         serializer.save()