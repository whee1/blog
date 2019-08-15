from django.contrib import admin
from .models import Ouser
# Register your models here.
@admin.register(Ouser)
class OuserAdmin(admin.ModelAdmin):
    list_display =("username","email")
