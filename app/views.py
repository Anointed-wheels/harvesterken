from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from app.models import *
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def homepage(request):
    return render(request, "index.html")

def contact(request):
    return render(request, "contact.html")

def cleaning(request):
    return render(request, "cleaning.html")

def pest_control(request):
    return render(request, "pest.html")

@csrf_exempt
# def customer(request):
#     if request.method == 'POST':
#         name = request.POST.get('name')
#         message = request.POST.get('message')
#         email = request.POST.get('email')
#         mobile_number = request.POST.get('mobile_number')

#         if not name or not message or not email or not mobile_number:
#             return JsonResponse({'status': 'error', 'message': 'Please provide all fields'})

#         if User.objects.filter(email=email).exists():
#             return JsonResponse({'status': 'error', 'message': 'This email already has an account with us'})

#         user = User.objects.create_user(
#             username=email,
#             email=email,
#             first_name=name
#         )
#         user.save()

#         return JsonResponse({'status': 'success', 'message': 'Thanks for subscribing! We’ll keep you updated.'})

#     return JsonResponse({'status': 'error', 'message': 'Invalid request'})

def customer(request):
    if request.method == 'POST':
        return JsonResponse({'status': 'success', 'message': 'AJAX received!'})
    return JsonResponse({'status': 'error', 'message': 'Not a POST request'})