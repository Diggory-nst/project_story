from django.contrib import admin
from .models import Story, Chapter, Comment, ListRead, VoteStory, ReceiveErrorChap, Rating, News

# Register your models here.

class StoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    list_display = ['title','genre', 'user', 'date_created']
    search_fields = ['title', 'author']


class ChapterAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('chap_number',)}
    list_display = ['story', 'chap_number', 'title', 'posting_date', 'posting_edit']
    search_fields = ['story', 'chap_number', 'title']


class CommentAdmin(admin.ModelAdmin):
    list_display = ['story', 'user', 'date_created']


class ListReadAdmin(admin.ModelAdmin):
    list_display = ['story', 'status']


class VoteStoryAdmin(admin.ModelAdmin):
    list_display = ['name_story', 'number_vote']


class ReceiveErrorChapAdmin(admin.ModelAdmin):
    list_display = ['name_story', 'name_chapter']

class RatingAdmin(admin.ModelAdmin):
    list_display = ['user', 'story']

class NewsAdmin(admin.ModelAdmin):
    list_display = ['title', 'date_created']

admin.site.register(Story, StoryAdmin)
admin.site.register(Chapter, ChapterAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(ListRead, ListReadAdmin)
admin.site.register(VoteStory, VoteStoryAdmin)
admin.site.register(ReceiveErrorChap, ReceiveErrorChapAdmin)
admin.site.register(Rating, RatingAdmin)
admin.site.register(News, NewsAdmin)