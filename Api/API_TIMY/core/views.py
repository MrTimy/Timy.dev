from django.shortcuts import render
from rest_framework import generics
from . serializer import *
from . models import *



# Create your views here.
class  ContactView(generics.ListCreateAPIView):
   
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer