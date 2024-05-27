from django.shortcuts import render


# Create your views here.
from django.http import HttpResponse


def index(request):
    return render(request,'main/test.html')

def about(request):
    return render(request,'main/user_home.html')


def page2(request):
    return render(request,'main/page2.html')


def page3(request):
    return render(request,'main/page3.html')


def page4(request):
    return render(request,'main/page4.html')

def register(request):
    return render(request, 'main/register.html')
