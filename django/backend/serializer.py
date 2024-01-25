from rest_framework import serializers
from .models import *

class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model= Machine
        fields= (
            'id',
            'uu_id',
            'machineName', 
            'machinePrice',
            'machineDescription', 
            'machineNegotiatable',
            'machineImage',
            'machineCategory',
            'machineBrand',
            'is_sale',
            'sale_price',
            'user',
            'dt'
            )

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model= MachineCategory
        fields= ('name')

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model= MachineBrand
        fields= ('name')