from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from accounts.models import UserProfile, User
from story.models import Story, Chapter
from .models import OrderOne, OrderCombo
from django.contrib import messages
from django.http import JsonResponse
import json
from django.contrib.auth.decorators import login_required

# Create your views here.


@login_required(login_url='logIn')
def open_chapter(request, story_id, story_slug, chapter_id, chapter_slug):
    user = request.user
    userProfile = get_object_or_404(UserProfile, user=user)
    story = get_object_or_404(Story, pk=story_id)
    chapter = get_object_or_404(Chapter, pk=chapter_id)
    chapters = Chapter.objects.filter(story=story)
    price = chapter.price

    order_exist = OrderOne.objects.filter(user=user, story=story, chap_number=chapter.chap_number).exists()

    if order_exist == False:
        if userProfile.number_lt >= 3:
            order = OrderOne.objects.create(
                user = user,
                story = story,
                chap_number = chapter.chap_number,
                total_money = price*1
            )

            order_user = str(order.user)

            userProfile.number_lt = userProfile.number_lt - order.total_money
            userProfile.save()
        else:
            messages.error(request, 'Tài khoản của bạn không đủ để mua truyện')

        condition = (order_user == user.username and order is not None and order.chap_number == chapter.chap_number)
    else:
        condition = True
        
    context = {
        'user': user,
        'story': story,
        'chapter': chapter,
        'chapters': chapters,
        'condition': condition,
    }

    return render(request, 'story/display-story.html', context)


@login_required(login_url='logIn')
def open_combo_vip(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)

        user = request.user
        userProfile = get_object_or_404(UserProfile, user=user)

        data = receive_data['data']
        chapter_start = data['chapter_start']
        chapter_end = data['chapter_end']
        number_of_chapter = data['total_chapter']
        story_id = data['story_id']
        chapter_slug = data['chapter_slug']
        
        story = get_object_or_404(Story, pk=story_id)
        chapter = get_object_or_404(Chapter, slug=chapter_slug)

        price_chapter = chapter.price

        chapter_start_num = int(chapter_start)
        chapter_end_num = int(chapter_end)

        open_chapter = list(range(chapter_start_num, chapter_end_num + 1))

        chapters = Chapter.objects.filter(story=story_id, chap_number__in=open_chapter, vip=True)

        orders = OrderOne.objects.filter(user=user, story=story ,chap_number__in=open_chapter)

        orders_new = [order.chap_number for order in orders]

        chapters_order = [chapter.chap_number for chapter in chapters if chapter.chap_number not in orders_new]

        num_chapters_order = len(chapters_order)

        if number_of_chapter == num_chapters_order:
            total_chapter = number_of_chapter
        else:
            total_chapter = number_of_chapter - num_chapters_order

        if total_chapter >= 100:
            total_money = (total_chapter*price_chapter) - ((total_chapter*3*20)/100)
        else:
            total_money = total_chapter*price_chapter

        if userProfile.number_lt >= total_money:
            order = [
                OrderOne(
                    user=user, story=story,
                    chap_number=chapter,
                    total_money=total_money
                )

                for chapter in chapters_order
            ]

            OrderOne.objects.bulk_create(order)

            OrderCombo.objects.create(user=user, story=story, total_chapter=total_chapter, total_money=total_money)

            userProfile.number_lt = userProfile.number_lt - total_money
            userProfile.save()

            return JsonResponse({'status': 'success', 'message': 'Bạn đã mở khóa thành công.'})
        else:
            return JsonResponse({'status': 'failure', 'message': 'Tài khoản của bạn không đủ Linh Thạch để mở khóa chương.'})
    
    return JsonResponse({'status': 'failure'})


def open_full_vip(request):
    if request.method == 'POST':
        receive_data = json.loads(request.body)

        data = receive_data['data']
        total_money = data['total_money']
        story_id = data['story_id']
        chapter_id = data['chapter_id']

        user = request.user
        userProfile = get_object_or_404(UserProfile, user=user)

        story = get_object_or_404(Story, pk=story_id)

        opened_chap = OrderOne.objects.filter(user=user, story=story)

        unopened_chapters = [order.chap_number for order in opened_chap]

        list_unopened_chapters = Chapter.objects.filter(story=story).exclude(chap_number__in=unopened_chapters)

        chapters_order = [chapter.chap_number for chapter in list_unopened_chapters]

        total_chapter = len(chapters_order)

        if userProfile.number_lt >= total_money:
            order = [
                OrderOne(
                    user=user, story=story,
                    chap_number=chapter,
                    total_money=total_money
                )

                for chapter in chapters_order
            ]

            OrderOne.objects.bulk_create(order)

            OrderCombo.objects.create(user=user, story=story, total_chapter=total_chapter, total_money=total_money)

            userProfile.number_lt = userProfile.number_lt - total_money
            userProfile.save()

            return JsonResponse({'status': 'success', 'message': 'Bạn đã mở khóa thành công.'})
        else:
            return JsonResponse({'status': 'failure', 'message': 'Tài khoản của bạn không đủ Linh Thạch để mở khóa chương.'})
    
    return JsonResponse({'status': 'failure'})


@login_required(login_url='logIn')
def payment(request):

    user = request.user

    context = {
        'user': user,
    }

    return render(request, 'payment.html', context)