from django.contrib import admin
from app.models import Elemento

class ElementoAdmin(admin.ModelAdmin):
    list_display = []
    for field in Elemento._meta.fields:
        list_display.append(field.name)

admin.site.register(Elemento, ElementoAdmin)
