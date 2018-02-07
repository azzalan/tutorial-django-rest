# -*- coding: utf-8 -*-
from django.conf.urls import url, include
from app.views import ElementoView
from rest_framework.routers import DefaultRouter

ROUTER = DefaultRouter()
ROUTER.register(r'elemento', ElementoView)

urlpatterns = [
    url(r'^api/', include(ROUTER.urls))
]
