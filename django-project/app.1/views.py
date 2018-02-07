from rest_framework import viewsets
from app.models import Elemento
from app.serializers import ElementoSerializer


class ElementoView(viewsets.ModelViewSet):
    queryset = Elemento.objects.all()
    serializer_class = ElementoSerializer
