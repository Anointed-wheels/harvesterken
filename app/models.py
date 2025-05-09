from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Customer(models.Model):
    firstname = models.CharField(max_length=250)
    message = models.TextField(null=True, blank=True)
    mobile_number = models.CharField(max_length=13)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f'{self.name} || N {self.price} | {self.quantity}'