from django.db import models

# Create your models here.

class Elemento(models.Model):
    texto_um = models.CharField(
        max_length=10,
        verbose_name='Texto Um',
        default='',
        blank=True,
    )
    texto_dois = models.CharField(
        max_length=20,
        verbose_name='Texto Dois',
        default='',
        blank=True,
    )
    texto_tres = models.CharField(
        max_length=30,
        verbose_name='Texto Três',
        default='',
        blank=True
    )

    def __str__(self):
        return str(self.texto_um)
