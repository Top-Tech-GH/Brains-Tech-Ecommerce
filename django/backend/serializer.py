from rest_framework import serializers
from .models import *

class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model= Machine
        fields= (
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