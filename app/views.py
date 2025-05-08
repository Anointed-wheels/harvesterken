from django.shortcuts import render, redirect
from django.contrib import messages, auth
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required

# Create your views here.
def homepage(request):
    return render(request, "index.html")

def contact(request):
    return render(request, "contact.html")

def cleaning(request):
    return render(request, "cleaning.html")

def pest_control(request):
    return render(request, "pest.html")