from django.urls import path
from . import views

urlpatterns = [
    path('registerUser/', views.registerUser, name='registerUser'),
    path('logIn/', views.logIn, name='logIn'),
    path('logOut/', views.logOut, name='logOut'),

    path('activate/<uidb64>/<token>/', views.activate, name = 'activate'),

    path('forgot_password/', views.Forgot_password.as_view(), name='forgot_password'),
    # path('forgot_password/', views.forgot_password, name='forgot_password'),
    path('reset_password_validate/<uidb64>/<token>/', views.reset_password_validate, name='reset_password_validate'),
    path('reset_password/', views.reset_password, name='reset_password'),
]