from django.shortcuts import render, redirect, get_object_or_404
from .models import Story, Chapter, Comment, ListRead, VoteStory, ReceiveErrorChap, Rating
from .forms import StoryForm, ChapterForm
from accounts.models import User, UserProfile
from django.contrib.auth.decorators import login_required, user_passes_test
from slugify import slugify
from order.models import OrderOne
import json
from django.http import JsonResponse, HttpResponse
from django.core.paginator import Paginator
from .utils import title_case
from django.views.decorators.cache import cache_page

# Create your views here.


def check_user(user):
    if (user.is_admin == True):
        return True
    else:
        return False


@login_required(login_url='logIn')
@user_passes_test(check_user)
def add_story(request):
    if request.method == 'POST':
        form = StoryForm(request.POST, request.FILES)
        user = request.user
        if form.is_valid():
            story = form.save(commit=False)
            # Lấy dữ liệu bằng 'cleaned_data' thì sạch, an toàn, được xác thực hơn là dữ liệu thô từ 'request.POST'
            # Điều này đảm bảo rằng code chỉ làm việc với dử liệu an toàn và đã được xác thực
            title = form.cleaned_data['title']
            story.user = user
            story.slug = slugify(title)
            story.save()
            return redirect('add_chapter')
        else:
            print(form.errors)
    else:
        form = StoryForm()

    context = {
        'form': form
    }

    return render(request, 'story/add-story.html', context)


@login_required(login_url='logIn')
@user_passes_test(check_user)
def add_chapter(request):
    if request.method == 'POST':
        form = ChapterForm(request.POST)
        user = request.user
        if form.is_valid():
            chapter = form.save(commit=False)
            story = form.cleaned_data['story']
            title = form.cleaned_data['title']
            chap_number = form.cleaned_data['chap_number']
            chapter.user = user
            chapter.slug = 'chuong-'+slugify(chap_number)+'-'+slugify(title)
            chapter.save()
            story = get_object_or_404(Story, title=story)

            story.number_of_chapter += 1
            story.save()

            return redirect('add_chapter')
        else:
            print(form.errors)
    else:
        form = ChapterForm()

    context = {
        'form': form
    }

    return render(request, 'story/add-chapter.html', context)


@cache_page(60 * 15)  # Cache for 15 minutes
def display_info_story(request, pk, slug):
    user = request.user

    if user.is_anonymous == False:
        userProfile = get_object_or_404(UserProfile, user=user)
    else:
        userProfile = None

    story = get_object_or_404(Story, pk=pk)
    genres = (story.genre).split(',')
    chapters = Chapter.objects.filter(story=story).order_by('posting_date')

    rating_exist = Rating.objects.exists()
    if rating_exist:
        rating = Rating.objects.filter(user=user, story=story)
    else:
        rating = None

    if chapters.count() >= 24:
        new_update_chapters = Chapter.objects.filter(
            story=story).order_by('-posting_date')[:6]
    else:
        new_update_chapters = None

    # NOMINATED STORY

    stories_nominated = Story.objects.filter(
        number_of_views__gt=100).order_by('-number_of_views')[:5]
    genres_nominated = [story.genre.split(
        ',')[0] for story in stories_nominated]

    # END

    # PAGINATION FOR LIST CHAPTER
    if chapters.count() > 50:
        paginator = Paginator(chapters, 50)  # Show 25 contacts per page.
        page_number = request.GET.get('page', 1)
        page_load_first = paginator.get_page(1)
        total_pages = paginator.num_pages
        page_range = list(paginator.page_range)
        len_page = len(page_range)
    else:
        page_load_first = None
        total_pages = None
        page_range = None
        len_page = None

    if len_page != None and len_page >= 3:
        elm_end = page_range[len_page - 1]
        elm_near_end = page_range[len_page - 2]
        elm_nearest_end = page_range[len_page - 3]
    else:
        elm_end = None
        elm_near_end = None
        elm_nearest_end = None

    # END

    if user.is_anonymous == False:
        list_read_exist = ListRead.objects.filter(
            user=user, story=story, status='saved').exists()
    else:
        list_read_exist = False

    if list_read_exist:
        list_read = get_object_or_404(
            ListRead, user=user, story=story, status='saved')
    else:
        list_read = None

    comment_exist = Comment.objects.exists()

    if comment_exist:
        comments = Comment.objects.filter(
            story=story, parent_comment__isnull=True, number_reply=0).order_by('-date_created')
        child_comments = Comment.objects.filter(
            story=story, parent_comment__isnull=False).order_by('-date_created')
    else:
        comments = None
        child_comments = None

    # PAGINATION FOR COMMENT

    comments_all = Comment.objects.filter(story=story, parent_comment__isnull=True).order_by(
        '-date_created') if comment_exist else None
    paginator_comment = Paginator(comments_all, 12) if comments_all else None

    if paginator_comment:
        page_comment_load_first = paginator_comment.get_page(1)
        total_pages_comment = paginator_comment.num_pages
        page_range_comment = list(paginator_comment.page_range)
        len_page_comment = len(page_range_comment)
        elm_end_comment = page_range_comment[len_page_comment - 1]
        elm_near_end_comment = page_range_comment[len_page_comment - 2]
        elm_nearest_end_comment = page_range_comment[len_page_comment - 3]
    else:
        page_comment_load_first = None
        total_pages_comment = None
        page_range_comment = None
        len_page_comment = None
        elm_end_comment = None
        elm_near_end_comment = None
        elm_nearest_end_comment = None

    # END

    story.number_of_views += 1
    story.save()

    context = {
        'userProfile': userProfile,
        'story': story,
        'genres': genres,
        'chapters': chapters,
        'new_update_chapters': new_update_chapters,
        'list_read': list_read,
        'comments': comments,
        'comments_all': comments_all,
        'child_comments': child_comments,
        'zip_nominated': zip(stories_nominated, genres_nominated),

        'page_load_first': page_load_first,
        'total_pages': total_pages,
        'page_range': page_range,
        'len_page': len_page,
        'elm_end': elm_end,
        'elm_near_end': elm_near_end,
        'elm_nearest_end': elm_nearest_end,

        'rating': rating,

        'page_comment_load_first': page_comment_load_first,
        'total_pages_comment': total_pages_comment,
        'page_range_comment': page_range_comment,
        'len_page_comment': len_page_comment,
        'elm_end_comment': elm_end_comment,
        'elm_near_end_comment': elm_near_end_comment,
        'elm_nearest_end_comment': elm_nearest_end_comment,
    }

    return render(request, 'story/detail-story-page.html', context)


def display_story(request, pk_story, slug1, slug2, pk_chap):
    user = request.user
    story = get_object_or_404(Story, pk=pk_story)
    chapters = Chapter.objects.filter(story=story)
    chapter = get_object_or_404(Chapter, story=story, pk=pk_chap)

    number_chap_next = str(int(chapter.chap_number) + 1)
    if int(chapter.chap_number) > 1:
        number_chap_prev = str(int(chapter.chap_number) - 1)
    else:
        number_chap_prev = False

    chapter_next_exist = Chapter.objects.filter(
        story=story, chap_number=number_chap_next).exists()
    if chapter_next_exist:
        chapter_next = get_object_or_404(
            Chapter, story=story, chap_number=number_chap_next)
    else:
        chapter_next = None

    if number_chap_prev != False:
        chapter_prev = get_object_or_404(
            Chapter, story=story, chap_number=number_chap_prev)
    else:
        chapter_prev = None

    if user.is_anonymous == False:
        order_exist = OrderOne.objects.filter(
            user=user, story=story, chap_number=chapter.chap_number).exists()
    else:
        order_exist = False

    if order_exist:
        order = get_object_or_404(
            OrderOne, user=user, story=story, chap_number=chapter.chap_number)
        order_user = str(order.user)
    else:
        order = None
        order_user = None

    opened_chap = OrderOne.objects.filter(user=user, story=story)

    unopened_chapters = chapters.count() - opened_chap.count()
    total_money_unopened_chapters = unopened_chapters*chapter.price
    total_money_sale = total_money_unopened_chapters - \
        ((total_money_unopened_chapters*20)/100)

    condition = (
        order_user == user.username and order is not None and order.chap_number == chapter.chap_number)

    # number_chapter_not_open_vip = Chapter.objects.filter(user)

    context = {
        'user': user,
        'story': story,
        'chapter': chapter,
        'chapters': chapters,
        'order_user': order_user,
        'condition': condition,
        'chapter_next': chapter_next,
        'chapter_prev': chapter_prev,
        'unopened_chapters': unopened_chapters,
        'total_money_unopened_chapters': total_money_unopened_chapters,
        'total_money_sale': total_money_sale,
    }

    return render(request, 'story/display-story.html', context)


def author(request, author):
    stories = Story.objects.filter(author=author)
    story = Story.objects.filter(author=author).first()
    genres = (story.genre).split(',')

    context = {
        'stories': stories,
        'genres': genres,
        'story': story,
    }

    return render(request, 'story/author-page.html', context)


@login_required(login_url='logIn')
def add_list_read(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)
        data = receive_data['data']

        story_id = data['story_id']

        user = request.user
        story = get_object_or_404(Story, pk=story_id)

        list_read_exist = ListRead.objects.filter(
            user=user, story=story).exists()

        if list_read_exist:
            list_read = get_object_or_404(ListRead, user=user, story=story)
            list_read.status = 'saved'
            list_read.save()
        else:
            ListRead.objects.create(user=user, story=story, status='saved')

        return JsonResponse({'status': 'success'})

    return JsonResponse({'status': 'failure'})


@login_required(login_url='logIn')
def remove_list_read(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)
        data = receive_data['data']

        story_id = data['story_id']

        user = request.user
        story = get_object_or_404(Story, pk=story_id)

        list_read = get_object_or_404(
            ListRead, user=user, story=story, status='saved')
        list_read.status = 'cancelled'
        list_read.save()

        return JsonResponse({'status': 'success'})

    return JsonResponse({'status': 'failure'})


@login_required(login_url='logIn')
def rate_story(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)
        data = receive_data['data']

        story_id = data['story_id']
        number_star_rate = data['number_star_rate']

        user = request.user
        story = get_object_or_404(Story, pk=story_id)

        Rating.objects.create(user=user, story=story)

        story.number_of_reviews += 1
        story.number_star_rate += number_star_rate
        story.rating_score = story.number_star_rate/story.number_of_reviews
        story.save()

        return JsonResponse({'status': 'success'})

    return JsonResponse({'status': 'failure'})


@login_required(login_url='logIn')
def add_comment(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)
        data = receive_data['data']

        story_id = data['story_id']
        content_comment = data['content_comment']

        user = request.user
        userProfile = get_object_or_404(UserProfile, user=user)
        story = get_object_or_404(Story, pk=story_id)

        comment = Comment.objects.create(
            user=user, story=story, content=content_comment, image_user=userProfile.profile_picture)

        date_created = comment.date_created

        date_created_new = date_created.strftime("%Y:%m:%d %H:%M")

        send_data = {
            'comment_id': comment.id,
            'username': user.username,
            'image': userProfile.profile_picture.url,
            'date_created': date_created_new,
        }

        return JsonResponse({'status': 'success', 'send_data': send_data})

    return JsonResponse({'status': 'failure'})


@login_required(login_url='logIn')
def reply_comment(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)
        data = receive_data['data']

        story_id = data['story_id']
        content_comment = data['content_reply_comment']
        parent_comment = data['parent_comment']

        user = request.user
        userProfile = get_object_or_404(UserProfile, user=user)
        story = get_object_or_404(Story, pk=story_id)

        comment = get_object_or_404(Comment, pk=parent_comment)
        add_reply_comment = Comment.objects.create(
            user=user, story=story, content=content_comment, parent_comment=comment, image_user=userProfile.profile_picture)
        comment.number_reply += 1
        comment.save()

        date_created = add_reply_comment.date_created

        date_created_new = date_created.strftime("%Y:%m:%d %H:%M")

        send_data = {
            'comment_id': add_reply_comment.id,
            'username': user.username,
            'image': userProfile.profile_picture.url,
            'date_created': date_created_new,
        }

        return JsonResponse({'status': 'success', 'send_data': send_data})

    return JsonResponse({'status': 'failure'})


@login_required(login_url='logIn')
def add_like_comment(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)
        data = receive_data['data']

        comment_id = data['comment_id']

        comment = get_object_or_404(Comment, pk=comment_id)
        comment.number_like += 1
        comment.save()

        return JsonResponse({'status': 'success', 'number_like': comment.number_like})

    return JsonResponse({'status': 'failure'})


@login_required(login_url='logIn')
def add_vote_story(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)
        data = receive_data['data']

        name_story = data['name_story']

        story_vote = VoteStory.objects.create(name_story=name_story)

        return JsonResponse({'status': 'success', 'story_id': story_vote.id})

    return JsonResponse({'status': 'failure'})


@login_required(login_url='logIn')
def vote_story(request):
    if request.method == 'POST':
        user = request.user
        receive_data = json.loads(request.body)
        data = receive_data['data']

        story_id = data['story_id']

        story_vote = get_object_or_404(VoteStory, pk=story_id)
        story_vote.number_vote += 1
        story_vote.user_voted = user.username
        story_vote.save()

        story_votes = VoteStory.objects.all()
        votes_list = []
        for vote in story_votes:
            vote_dict = {
                'model': str(VoteStory._meta),
                'pk': vote.pk,
                'fields': {
                    'number_vote': vote.number_vote,
                    'user_voted': vote.user_voted
                }
            }
            votes_list.append(vote_dict)

        data_send = {
            'number_vote': story_vote.number_vote,
            'story_votes': votes_list
        }

        return JsonResponse({'status': 'success', 'data_send': data_send})

    return JsonResponse({'status': 'failure'})


def receive_error_chapter(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)
        data = receive_data['data']

        name_story = data['name_story']
        name_chapter = data['name_chapter']
        content_error = data['content_error']

        ReceiveErrorChap.objects.create(
            name_story=name_story, name_chapter=name_chapter, description=content_error)

        return JsonResponse({'status': 'success'})

    return JsonResponse({'status': 'failure'})


def pagination_story(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)
        data = receive_data['data']

        story_id = data['story_id']
        number_page = data['number_page']

        story = get_object_or_404(Story, pk=story_id)
        chapters = Chapter.objects.filter(story=story)

        paginator = Paginator(chapters, 50)  # Show 25 contacts per page.

        page = paginator.page(number_page)
        data_page = [{'chap_number': item.chap_number, 'title': item.title,
                      'slug': item.slug} for item in page.object_list]
        total_pages = paginator.num_pages

        send_data = {
            'data_page': data_page,
            'story_slug': story.slug,
            'total_pages': total_pages,
        }

        return JsonResponse({'status': 'success', 'send_data': send_data})

    return JsonResponse({'status': 'failure'})


def pagination_comment(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)
        data = receive_data['data']

        story_id = data['story_id']
        number_page = data['number_page']

        user = request.user
        user_profile = get_object_or_404(UserProfile, user=user)
        story = get_object_or_404(Story, pk=story_id)
        child_comments = Comment.objects.filter(
            story=story, parent_comment__isnull=False).order_by('-date_created')
        comments_all = Comment.objects.filter(
            story=story, parent_comment__isnull=True).order_by('-date_created')

        child_comments_list = []
        for child_comment in child_comments:
            child_comment_dict = {
                'model': str(Comment._meta),
                'pk': child_comment.pk,
                'fields': {
                    'username': child_comment.user.username,
                    'image_user': child_comment.image_user.url,
                    'content': child_comment.content,
                    'date_created': child_comment.date_created,
                    'number_like': child_comment.number_like,
                    'parent_comment_id': child_comment.parent_comment.id,
                }
            }
            child_comments_list.append(child_comment_dict)

        paginator = Paginator(comments_all, 12)  # Show 25 contacts per page.

        page = paginator.page(number_page)
        data_page = [{'id': item.id, 'username': item.user.username, 'image_user': item.image_user.url, 'content': item.content,
                      'date_created': item.date_created, 'number_reply': item.number_reply, 'number_like': item.number_reply} for item in page.object_list]
        total_pages = paginator.num_pages

        send_data = {
            'comments': data_page,
            'child_comments': child_comments_list,
            'total_pages': total_pages,
            'user_profile_image': user_profile.profile_picture.url,
        }

        return JsonResponse({'status': 'success', 'send_data': send_data})

    return JsonResponse({'status': 'failure'})


@cache_page(60 * 15)  # Cache for 15 minutes
def filter_story(request, device=None, status_story=None, type_story=None):

    if device and status_story and type_story:
        status = [status_story]

        if status_story == 'Toàn Bộ' and type_story == 'Tất Cả':
            filter_story_mob = Story.objects.all()
        elif status_story == 'Toàn Bộ':
            filter_story_mob = Story.objects.filter(genre__contains=type_story)
        elif type_story == 'Tất Cả':
            filter_story_mob = Story.objects.filter(status__in=status)
        else:
            filter_story_mob = Story.objects.filter(
                status__in=status, genre__contains=type_story)

        genre_story_mob = [story.genre.split(
            ',')[0] for story in filter_story_mob]

        # PAGINATION FOR LIST CHAPTER MOBILE

        if filter_story_mob.count() > 16:
            # Show 25 contacts per page.
            paginator = Paginator(filter_story_mob, 16)
            page_number = request.GET.get('page', 1)
            page_load_first = paginator.get_page(1)
            genre_pagination_story = [story.genre.split(
                ',')[0] for story in page_load_first]
            total_pages = paginator.num_pages
            page_range = list(paginator.page_range)
            len_page = len(page_range)
        else:
            page_load_first = None
            total_pages = None
            page_range = None
            len_page = None
            genre_pagination_story = None

        if page_load_first and genre_pagination_story:
            zip_pagination_story = zip(page_load_first, genre_pagination_story)
        else:
            zip_pagination_story = None

        if len_page != None and len_page >= 3:
            elm_end = page_range[len_page - 1]
            elm_near_end = page_range[len_page - 2]
            elm_nearest_end = page_range[len_page - 3]
        else:
            elm_end = None
            elm_near_end = None
            elm_nearest_end = None

        context = {
            'filter_story_mob': filter_story_mob,
            'zip_filter_mob': zip(filter_story_mob, genre_story_mob),
            'zip_pagination_story': zip_pagination_story,
            'page_load_first': page_load_first,
            'total_pages': total_pages,
            'page_range': page_range,
            'len_page': len_page,
            'elm_end': elm_end,
            'elm_near_end': elm_near_end,
            'elm_nearest_end': elm_nearest_end,
        }

        return render(request, 'story/filter-mobile.html', context)
    elif status_story and type_story:
        status = [status_story]

        if status_story == 'Toàn Bộ' and type_story == 'Tất Cả':
            filter_story = Story.objects.all()
        elif status_story == 'Toàn Bộ':
            filter_story = Story.objects.filter(genre__contains=type_story)
        elif type_story == 'Tất Cả':
            filter_story = Story.objects.filter(status__in=status)
        else:
            filter_story = Story.objects.filter(
                status__in=status, genre__contains=type_story)

        genre_story = [story.genre.split(',')[0] for story in filter_story]
    else:
        filter_story = Story.objects.all()
        genre_story = [story.genre.split(',')[0] for story in filter_story]

    # PAGINATION FOR LIST CHAPTER

    if filter_story.count() > 16:
        paginator = Paginator(filter_story, 16)  # Show 25 contacts per page.
        page_number = request.GET.get('page', 1)
        page_load_first = paginator.get_page(1)
        genre_pagination_story = [story.genre.split(
            ',')[0] for story in page_load_first]
        total_pages = paginator.num_pages
        page_range = list(paginator.page_range)
        len_page = len(page_range)
    else:
        page_load_first = None
        total_pages = None
        page_range = None
        len_page = None
        genre_pagination_story = None

    if page_load_first and genre_pagination_story:
        zip_pagination_story = zip(page_load_first, genre_pagination_story)
    else:
        zip_pagination_story = None

    if len_page != None and len_page >= 3:
        elm_end = page_range[len_page - 1]
        elm_near_end = page_range[len_page - 2]
        elm_nearest_end = page_range[len_page - 3]
    else:
        elm_end = None
        elm_near_end = None
        elm_nearest_end = None

    # END

    context = {
        'filter_story': filter_story,
        "zip_initial_story": zip(filter_story, genre_story),
        'zip_pagination_story': zip_pagination_story,
        'page_load_first': page_load_first,
        'total_pages': total_pages,
        'page_range': page_range,
        'len_page': len_page,
        'elm_end': elm_end,
        'elm_near_end': elm_near_end,
        'elm_nearest_end': elm_nearest_end,
    }

    return render(request, 'story/filter.html', context)


def pagination_filter_story(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)
        data = receive_data['data']

        status_story = data['status_story']
        type_story = data['type_story']
        number_page = data['number_page']

        list_status = [status_story]

        if status_story == 'Toàn Bộ' and type_story == 'Tất Cả':
            filter_story = Story.objects.all()
        elif status_story == 'Toàn Bộ':
            filter_story = Story.objects.filter(genre__contains=type_story)
        elif type_story == 'Tất Cả':
            filter_story = Story.objects.filter(status__in=list_status)
        else:
            filter_story = Story.objects.filter(
                status__in=list_status, genre__contains=type_story)

        genre_story = [story.genre.split(',')[0] for story in filter_story]

        paginator = Paginator(filter_story, 16)  # Show 25 contacts per page.

        page = paginator.page(number_page)
        total_pages = paginator.num_pages

        data_page = [{'slug': story.slug, 'title': story.title, 'status': story.status, 'image': story.image.url, 'author': story.author, 'genre': genre,
                      'number_of_chapter': story.number_of_chapter, 'description': story.description, 'date_created': story.date_created} for story, genre in zip(page.object_list, genre_story)]

        send_data = {
            'data_page': data_page,
            'total_pages': total_pages,
        }

        return JsonResponse({'status': 'success', 'send_data': send_data})

    return JsonResponse({'status': 'failure'})


def pagination_filter_story_mob(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)
        data = receive_data['data']

        status_story = data['status_story']
        type_story = data['type_story']
        number_page = data['number_page']

        list_status = [status_story]

        if status_story == 'Toàn Bộ' and type_story == 'Tất Cả':
            filter_story = Story.objects.all()
        elif status_story == 'Toàn Bộ':
            filter_story = Story.objects.filter(genre__contains=type_story)
        elif type_story == 'Tất Cả':
            filter_story = Story.objects.filter(status__in=list_status)
        else:
            filter_story = Story.objects.filter(
                status__in=list_status, genre__contains=type_story)

        genre_story = [story.genre.split(',')[0] for story in filter_story]

        paginator = Paginator(filter_story, 16)  # Show 25 contacts per page.

        page = paginator.page(number_page)
        total_pages = paginator.num_pages

        data_page = [{'slug': story.slug, 'title': story.title, 'status': story.status, 'image': story.image.url, 'author': story.author, 'genre': genre, 'number_of_chapter': story.number_of_chapter,
                      'number_of_views': story.number_of_views, 'description': story.description, 'date_created': story.date_created} for story, genre in zip(page.object_list, genre_story)]

        send_data = {
            'data_page': data_page,
            'total_pages': total_pages,
        }

        return JsonResponse({'status': 'success', 'send_data': send_data})

    return JsonResponse({'status': 'failure'})


def search_story(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)
        data = receive_data['data']

        value_search = data['value_search']

        value_search = title_case(value_search)

        story = Story.objects.filter(title=value_search)
        author_story = Story.objects.filter(author=value_search)

        if story:
            send_data = {
                'story_slug': story.first().slug,
                'author': None
            }
        elif author_story:
            send_data = {
                'story_slug': None,
                'author': author_story.first().author
            }
        else:
            send_data = {
                'story_pk': story.pk,
                'story_slug': None,
                'author': None
            }

        return JsonResponse({'status': 'success', 'send_data': send_data})

    return JsonResponse({'status': 'failure', 'message': 'Invalid request'})


@cache_page(60 * 15)  # Cache for 15 minutes
def display_type(request, type_story):

    story_raw = Story.objects.filter(genre__contains=type_story)
    genre_raw = [story.genre.split(',')[0] for story in story_raw]
    list_id = [story.pk for story, genre in zip(
        story_raw, genre_raw) if genre == type_story]

    stories = Story.objects.filter(pk__in=list_id)

    number_type_story = stories.count()

    # PAGINATION FOR LIST CHAPTER

    if stories.count() > 16:
        paginator = Paginator(stories, 16)  # Show 25 contacts per page.
        page_number = request.GET.get('page', 1)
        page_load_first = paginator.get_page(1)
        total_pages = paginator.num_pages
        page_range = list(paginator.page_range)
        len_page = len(page_range)
    else:
        page_load_first = None
        total_pages = None
        page_range = None
        len_page = None

    if len_page != None and len_page >= 3:
        elm_end = page_range[len_page - 1]
        elm_near_end = page_range[len_page - 2]
        elm_nearest_end = page_range[len_page - 3]
    else:
        elm_end = None
        elm_near_end = None
        elm_nearest_end = None

    context = {
        'stories': stories,
        'type': type_story,
        'number_type_story': number_type_story,
        'page_load_first': page_load_first,
        'total_pages': total_pages,
        'page_range': page_range,
        'len_page': len_page,
        'elm_end': elm_end,
        'elm_near_end': elm_near_end,
        'elm_nearest_end': elm_nearest_end,
    }

    return render(request, 'story/type-page.html', context)


def pagination_type_page(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)
        data = receive_data['data']

        type_story = data['type_story']
        number_page = data['number_page']

        story_raw = Story.objects.filter(genre__contains=type_story)
        genre_raw = [story.genre.split(',')[0] for story in story_raw]
        list_id = [story.pk for story, genre in zip(
            story_raw, genre_raw) if genre == type_story]

        stories = Story.objects.filter(pk__in=list_id)

        paginator = Paginator(stories, 16)  # Show 25 contacts per page.

        page = paginator.page(number_page)
        total_pages = paginator.num_pages

        data_page = [{'slug': story.slug, 'title': story.title, 'status': story.status, 'image': story.image.url, 'author': story.author, 'number_of_chapter': story.number_of_chapter,
                      'number_of_views': story.number_of_views, 'description': story.description, 'date_created': story.date_created} for story in page.object_list]

        send_data = {
            'data_page': data_page,
            'total_pages': total_pages,
        }

        return JsonResponse({'status': 'success', 'send_data': send_data})

    return JsonResponse({'status': 'failure'})
