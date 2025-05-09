from django.urls import path
from app.views import homepage, contact, cleaning, pest_control, customer

urlpatterns= [
    path("", homepage, name= "hom"),
    path('contact', contact, name= "con"),
    path('cleaning', cleaning, name= 'clean'),
    path('pest_control', pest_control, name= 'pest'),
    path('customer/', customer, name='customer')
]