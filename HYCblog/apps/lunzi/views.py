from django.shortcuts import render
from .models import Article,BigCategory,Category,Tag
from django.shortcuts import get_list_or_404,get_object_or_404
from django.views import generic
# Create your views here.

class IndexView(generic.ListView):
    model = Article
    template_name = "index.html"
    context_object_name = 'article'
    

