from django import forms
from .models import Story, Chapter, Comment
from django_ckeditor_5.widgets import CKEditor5Widget

class StoryForm(forms.ModelForm):
    class Meta:
        model = Story
        fields = ['title', 'author', 'status', 'genre', 'description', 'image']


class ChapterForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["content"].required =False

    class Meta:
        model = Chapter
        fields = ['story', 'title', 'chap_number', 'content', 'vip', 'price']
        widgets = {
              "content": CKEditor5Widget(
                  attrs={"class": "django_ckeditor_5"}, config_name="extends"
              )
          }