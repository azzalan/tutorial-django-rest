from rest_framework import serializers
from app.models import Elemento

class ElementoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Elemento
        fields = '__all__'
