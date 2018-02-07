from rest_framework import viewsets, serializers
from app.models import Elemento
from app.serializers import ElementoSerializer


class ElementoView(viewsets.ModelViewSet):
    queryset = Elemento.objects.all()
    serializer_class = ElementoSerializer

    def get_serializer_class(self):
        if self.action == 'create':
            pass
        if self.action == 'update':
            pass
        if self.action == 'partial_update':
            pass
        if self.action == 'list':
            pass
        if self.action == 'retrieve':
            pass
        if self.action == 'destroy':
            pass
        return ElementoSerializer

    def get_queryset(self):
        query = Elemento.objects.all()
        # if self.action == 'list':
        #     filtro = self.request.query_params
        #     if filtro:
        #         if 'algumParametro' in filtro:
        #             query = query.filter(algum_parametro=filtro[algumParametro])
        return query

    def perform_create(self, serializer):
        print('perform_create')
        validated_data = serializer.validated_data
        print(validated_data)
        erro_aconteceu = False
        if erro_aconteceu:
            alerta = 'Mensagem de alerta aqui.'
            raise serializers.ValidationError(
                {'parametroProblematico': alerta}
            )
        else:
            elemento = serializer.save()
            print(elemento.id)


    def perform_update(self, serializer):
        print('perform_update')
        validated_data = serializer.validated_data
        print(validated_data)
        elemento = serializer.save()
        print(elemento.id)

    def criar_elemento(self, data):
        elemento_serializer = ElementoSerializer(data=data)
        if elemento_serializer.is_valid():
            elemento_serializer.save()

    def atualizar_elemento(self, elemento, data):
        elemento_serializer = ElementoSerializer(elemento, data=data)
        if elemento_serializer.is_valid():
            elemento_serializer.save()
