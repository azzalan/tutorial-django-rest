from rest_framework import serializers
from app.models import Elemento

class ElementoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Elemento
        fields = '__all__'
        # exclude = ('estadia',)
        depth = 1

    def to_internal_value(self, data):
        # Faça alguma coisa com a 'data' aqui.
        validated_data = super(ElementoSerializer, self).to_internal_value(data)
        # Faça alguma coisa com a 'validated_data' aqui.
        return validated_data
