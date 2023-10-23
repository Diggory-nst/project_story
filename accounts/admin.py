from django.contrib import admin
from .models import User, UserProfile
from django.contrib.auth.admin import UserAdmin

# Register your models here.

# Máy 1
# user: diggory123
# password: 123456

# Máy 2
# user: diggory
# password: 123456

class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'date_joined')
    filter_horizontal = ()
    list_filter=()
    fieldsets = ()

admin.site.register(User, CustomUserAdmin)
admin.site.register(UserProfile) 