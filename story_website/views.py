from django.shortcuts import render, HttpResponse
from story.models import VoteStory, Story, News


def home(request):

    user = request.user
    vote_story_exist = VoteStory.objects.exists()
    if vote_story_exist:
        vote_stories = VoteStory.objects.all()
        condition = VoteStory.objects.filter(user_voted=user.username).exists()
    else:
        vote_stories = None
        condition = None

    # STORY SLIDE IN HOME

    # Những trường được chỉ định trong only() sẽ được ưu tiên tải trước, những trường còn lại sẽ tải sau
    # defer() ngược lại only()

    stories_slide = Story.objects.all().only(
        'pk', 'image', 'title', 'slug', 'description')[:6]

    # NOMINATED STORY

    story_most_viewed = Story.objects.order_by('-number_of_views').only(
        'pk', 'image', 'title', 'slug', 'author', 'genre', 'number_of_chapter').first()
    stories_nominated = Story.objects.filter(number_of_views__gt=100).exclude(pk=story_most_viewed.pk).only(
        'pk', 'title', 'slug', 'number_of_chapter').order_by('-number_of_views')[:7]
    stories_nominated_tablet = Story.objects.filter(number_of_views__gt=100).exclude(
        pk=story_most_viewed.pk).only('pk', 'title', 'slug', 'number_of_chapter').order_by('-number_of_views')[:4]
    genres_most_viewed = (story_most_viewed.genre).split(',')[0]

    stories_nominated_mobile = Story.objects.filter(
        number_of_views__gt=100).order_by('-number_of_views')[:5]
    genres_noMobile = [story.genre.split(',')[0]
                       for story in stories_nominated_mobile]

    # FULL STORY

    stories_full = Story.objects.filter(status='Hoàn Thành')[:12]
    genres_full_story = [story.genre.split(',')[0] for story in stories_full]

    stories_full_mob = Story.objects.filter(status='Hoàn Thành')[:5]
    genres_full_story_mob = [story.genre.split(
        ',')[0] for story in stories_full_mob]

    # NEW STORY

    new_story = Story.objects.order_by('-date_created').first()
    stories_news = Story.objects.exclude(
        pk=new_story.pk).order_by('-date_created')[:6]
    genres_new_story = [story.genre.split(',')[0] for story in stories_news]

    stories_news_mob = Story.objects.order_by('-date_created')[:5]
    genres_new_story_mob = [story.genre.split(
        ',')[0] for story in stories_news_mob]

    # NUMBER OF GENRE

    th_genre = Story.objects.filter(genre__contains='Tiên Hiệp').count()
    hh_genre = Story.objects.filter(genre__contains='Huyền Huyễn').count()
    dt_genre = Story.objects.filter(genre__contains='Đô Thị').count()
    khh_genre = Story.objects.filter(genre__contains='Khoa Huyễn').count()
    kyh_genre = Story.objects.filter(genre__contains='Kỳ Huyễn').count()
    vh_genre = Story.objects.filter(genre__contains='Võ Hiệp').count()
    ls_genre = Story.objects.filter(genre__contains='Lịch Sử').count()
    nt_genre = Story.objects.filter(genre__contains='Ngôn Tình').count()
    s_genre = Story.objects.filter(genre__contains='Sắc').count()
    ck_genre = Story.objects.filter(genre__contains='Cạnh Kỹ').count()
    qs_genre = Story.objects.filter(genre__contains='Quân Sự').count()
    dh_genre = Story.objects.filter(genre__contains='Du Hí').count()
    ld_genre = Story.objects.filter(genre__contains='Linh Dị').count()
    tc_genre = Story.objects.all().count()

    # if want to loop 2 object in template Django, we use 'zip' method built-in python

    # NEWS

    news = News.objects.all()
    number_news = news.count()

    context = {
        'user': user,
        'vote_stories': vote_stories,
        'condition': condition,
        'stories_slide': stories_slide,
        'story_most_viewed': story_most_viewed,
        'stories_nominated': stories_nominated,
        'stories_nominated_tablet': stories_nominated_tablet,
        'genres_most_viewed': genres_most_viewed,
        'zip_stories_full': zip(stories_full, genres_full_story),
        'zip_stories_full_mob': zip(stories_full_mob, genres_full_story_mob),
        'new_story': new_story,
        'zip_stories_new': zip(stories_news, genres_new_story),
        'zip_stories_new_mob': zip(stories_news_mob, genres_new_story_mob),
        'zip_nominated_mobile': zip(stories_nominated_mobile, genres_noMobile),
        'news': news,
        'number_news': number_news,

        'th_genre': th_genre,
        'hh_genre': hh_genre,
        'dt_genre': dt_genre,
        'khh_genre': khh_genre,
        'kyh_genre': kyh_genre,
        'vh_genre': vh_genre,
        'ls_genre': ls_genre,
        'nt_genre': nt_genre,
        's_genre': s_genre,
        'ck_genre': ck_genre,
        'qs_genre': qs_genre,
        'dh_genre': dh_genre,
        'ld_genre': ld_genre,
        'tc_genre': tc_genre,
    }

    return render(request, 'home.html', context)
