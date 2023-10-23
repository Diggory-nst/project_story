from django.urls import path
from . import views

urlpatterns = [
    path('add_story/', views.add_story, name='add_story'),
    path('add_chapter/', views.add_chapter, name='add_chapter'),
    path('filter_story/', views.filter_story, name='filter_story'),
    path('display_type/<str:type_story>/', views.display_type, name='display_type'),
    path('filter_story/<str:status_story>/<str:type_story>/', views.filter_story, name='filter_story'),
    path('filter_story/<str:device>/<str:status_story>/<str:type_story>/', views.filter_story, name='filter_story'),

    path('<int:pk>/<slug:slug>/', views.display_info_story, name='display_info_story'),
    path('<int:pk_story>/<slug:slug1>/<slug:slug2>/<int:pk_chap>', views.display_story, name='display_story'),

    path('author/<str:author>/', views.author, name='author'),
]