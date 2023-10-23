from django.contrib import admin
from .models import Payment, OrderOne, OrderCombo

# Register your models here.

class PaymentAdmin(admin.ModelAdmin):
    list_display = ['user', 'transaction_id', 'amount', 'created_at']
    search_fields = ['transaction_id', 'user']


class OrderOneAdmin(admin.ModelAdmin):
    list_display = ['user', 'story', 'chap_number', 'total_money']
    search_fields = ['user', 'story']

class OrderComboAdmin(admin.ModelAdmin):
    list_display = ['user', 'story', 'total_chapter', 'total_money', 'created_at']
    search_fields = ['user', 'story']

admin.site.register(Payment, PaymentAdmin)
admin.site.register(OrderOne, OrderOneAdmin)
admin.site.register(OrderCombo, OrderComboAdmin)