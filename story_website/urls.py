"""story_website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views
from accounts import views as AccountsViews
from order import views as OrderViews
from story import views as StoryViews
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),

    path('my_account/', AccountsViews.my_account, name='my_account'),

    path('accounts/', include('accounts.urls')),
    path('story/', include('story.urls')),

    # Order
    path('<int:story_id>/<str:story_slug>/<int:chapter_id>/<str:chapter_slug>/', OrderViews.open_chapter, name='open_chapter'),
    path('open_combo_vip/', OrderViews.open_combo_vip, name='open_combo_vip'),
    path('open_full_vip/', OrderViews.open_full_vip, name='open_full_vip'),

    # Add list-read Story
    path('add_list_read/', StoryViews.add_list_read, name='add_list_read'),
    
    # Remove list_read Story
    path('remove_list_read/', StoryViews.remove_list_read, name='remove_list_read'),

    # Rate Story
    path('rate_story/', StoryViews.rate_story, name='rate_story'),

    # Add Comment Story
    path('add_comment/', StoryViews.add_comment, name='add_comment'),
    path('reply_comment/', StoryViews.reply_comment, name='reply_comment'),
    path('add_like_comment/', StoryViews.add_like_comment, name='add_like_comment'),

    # Vote Story
    path('add_vote_story/', StoryViews.add_vote_story, name='add_vote_story'),
    path('vote_story/', StoryViews.vote_story, name='vote_story'),

    # Receive Error
    path('receive_error_chapter/', StoryViews.receive_error_chapter, name='receive_error_chapter'),

    # Pagination for Story
    path('pagination_story/', StoryViews.pagination_story, name="pagination_story"),

    # Pagination for Comment
    path('pagination_comment/', StoryViews.pagination_comment, name="pagination_comment"),

    # Pagination for Filter Story
    path('pagination_filter_story/', StoryViews.pagination_filter_story, name="pagination_filter_story"),
    path('pagination_filter_story_mob/', StoryViews.pagination_filter_story_mob, name="pagination_filter_story_mob"),
    
    # Pagination for Type Page
    path('pagination_type_page/', StoryViews.pagination_type_page, name="pagination_type_page"),

    # SEARCH STORY
    path('search_story/', StoryViews.search_story, name='search_story'),


    # Payment
    path('payment/', OrderViews.payment, name='payment'),

    path("ckeditor5/", include('django_ckeditor_5.urls')),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
