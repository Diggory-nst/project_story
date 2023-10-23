from django.db import models
from .utils import title_case
from django_ckeditor_5.fields import CKEditor5Field
from accounts.models import User

# Create your models here.

class Story(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, unique=True)
    image = models.ImageField(upload_to='storyImages', blank=True)
    slug = models.SlugField(max_length=100, unique=True)
    author = models.CharField(max_length= 50)
    status = models.CharField(max_length= 50)
    genre = models.CharField(max_length= 50)
    description = models.TextField(max_length=3000,blank=True)
    number_of_chapter = models.IntegerField(default=0)
    number_of_views = models.IntegerField(default=0)
    number_of_comment = models.IntegerField(default=0)
    number_of_reviews = models.IntegerField(default=0)
    number_star_rate = models.IntegerField(default=0)
    rating_score = models.DecimalField(default=0.0, max_digits=3, decimal_places=1)
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'story'
        verbose_name_plural = 'stories'

    def clean(self):
        self.title = title_case(self.title)
        self.author = title_case(self.author)
        self.genre = title_case(self.genre)
        self.status = title_case(self.status)

    def __str__(self):
        return self.title


class Chapter(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    story = models.ForeignKey(Story, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, unique=True)
    chap_number = models.CharField(max_length=20)
    slug = models.SlugField(max_length=200)
    content = CKEditor5Field('Text', config_name='extends')
    vip = models.BooleanField(default=False)
    price = models.IntegerField(default=3)
    posting_date = models.DateTimeField(auto_now_add=True)
    posting_edit = models.DateTimeField(auto_now=True)

    def clean(self):
        self.title = self.title.capitalize()
        self.chap_number = self.chap_number.capitalize()

    def __str__(self):
        return self.chap_number


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image_user = models.ImageField()
    story = models.ForeignKey(Story, related_name='comments',on_delete=models.CASCADE)
    content = models.TextField(max_length=1000)
    number_reply = models.IntegerField(default=0)
    number_like = models.IntegerField(default=0)
    date_created = models.DateTimeField(auto_now_add=True)
    parent_comment = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return '%s - %s - %s' % (self.story.title, self.user.username, self.number_reply)


class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    story = models.ForeignKey(Story, on_delete=models.CASCADE)
    

class ListRead(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    story = models.ForeignKey(Story, on_delete=models.CASCADE, blank=True, null=True)
    status = models.CharField(max_length=50, blank=True, null=True)


class VoteStory(models.Model):
    name_story = models.CharField(max_length=100, unique=True)
    number_vote = models.IntegerField(default=0)
    user_voted = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.name_story


class ReceiveErrorChap(models.Model):
    name_story = models.CharField(max_length=100)
    name_chapter = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)

    def __str__(self):
        return self.name_story
    

class News(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(max_length=1000, blank=True, null=True)
    link_face = models.TextField(max_length=1000, blank=True, null=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title