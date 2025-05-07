from django.urls import path
from app.views import homepage, contact, cleaning

urlpatterns= [
    path("", homepage, name= "hom"),
    path('contact', contact, name= "con"),
    path('cleaning', cleaning, name= 'clean')
]