from django.db import models
from accounts.models import User
from story.models import Story, Chapter

# Create your models here.

class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    transaction_id = models.CharField(max_length=100, unique=True)
    amount = models.CharField(max_length=100)
    amount_received = models.CharField(max_length=100)
    transaction_form = models.CharField(max_length=100, default='Chuyển Khoản Trực Tiếp')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.transaction_id
    

class OrderOne(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    story = models.ForeignKey(Story, on_delete=models.CASCADE)
    chap_number = models.CharField(max_length=50)
    total_money = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.chap_number


class OrderCombo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    story = models.ForeignKey(Story, on_delete=models.CASCADE)
    total_chapter = models.IntegerField()
    total_money = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)