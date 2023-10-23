from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages, auth
from .models import UserProfile
from .forms import UserForm, User
from .utils import send_verification_email, decode_uid
from django.http import HttpResponse
from django.utils.http import urlsafe_base64_decode
from django.contrib.auth.tokens import default_token_generator
from django.views import View
from django.contrib.auth.decorators import login_required
from story.models import ListRead, Chapter
from order.models import Payment, OrderOne, OrderCombo

# Create your views here.

def registerUser(request):
    if request.user.is_authenticated:
        return redirect('home')
    elif request.method =='POST':
        form = UserForm(request.POST)
        if form.is_valid():
            password = form.cleaned_data['password']
            user = form.save(commit=False)
            user.set_password(password)
            user.save()

            # Send verification email
            mail_subject = 'Vui lòng click để kích hoạt tài khoản'
            email_template = 'accounts/emails/account_verification_email.html'

            send_verification_email(request, user, mail_subject, email_template)

            return render(request, 'waiting-verification.html')
        else:
            print(form.errors)
    else:
        form = UserForm()

    context = {
        'form': form,
    }

    return render(request,'accounts/registerUser.html', context)


def logIn(request):
    if request.user.is_authenticated:
        return redirect('home')
    elif request.method == 'POST':
        username = request.POST['username']
        password = request.POST['new-password']
        
        user = auth.authenticate(username = username, password=password)
        
        if user is not None:
            auth.login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Thông tin đăng nhập không hợp lệ.')
            return redirect('logIn')

    return render(request, 'accounts/logIn.html')


def logOut(request):
    auth.logout(request)
    return redirect('home')


def activate(request, uidb64, token):
    # Active the user by setting the is_active to True
    try:
        uid = urlsafe_base64_decode(uidb64).decode()
        user = User._default_manager.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and default_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        return redirect('home')
    else:
        return redirect('registerUser')


# Have 2 way to write forgot_password function
# Way 1: Use def normal. I don't see it clearly ( Dễ lộn giữa GET và POST )
# def forgot_password(request):
#     if request.method == 'POST':
#         email = request.POST['email']

#         if User.objects.filter(email = email).exists():
#             user = User.objects.get(email__exact= email)

#             # Send reset password email
#             mail_subject = 'Reset Your Password'
#             email_template = 'accounts/emails/reset_password_email.html'

#             send_verification_email(request, user, mail_subject, email_template)

#             messages.success(request, 'Password reset link has been sent to your email address')
#             return redirect('logIn')
#         else:
#             messages.error(request, 'Account does not exist')
#             return redirect(request, 'forgot_password')
#     return render(request, 'accounts/forgot_password.html')

# Way 2: Use class based View ( Phân biệt rõ ràng giữa GET và POST )

class Forgot_password(View):
    def get(self, request):
        return render(request, 'accounts/forgot_password.html')

    def post(self, request):
        if request.method == 'POST':
            email = request.POST['new-email']

            if User.objects.filter(email = email).exists():
                user = User.objects.get(email__exact =  email)

                # Send reset password email
                mail_subject = 'Đặt lại mật khẩu của bạn'
                email_template = 'accounts/emails/reset_password_email.html'

                send_verification_email(request, user, mail_subject, email_template)

                return render(request, 'waiting_reset_pw.html')
            else:
                messages.error(request, 'Email không tồn tại')
                return redirect('forgot_password')


def reset_password_validate(request, uidb64, token):
    user = decode_uid(request, uidb64)['user']
    uid = decode_uid(request, uidb64)['uid']

    if user is not None and default_token_generator.check_token(user, token):
        request.session['uid'] = uid
        return redirect('reset_password')
    else:
        return redirect('home')


def reset_password(request):
    if request.method == 'POST':
        password = request.POST['new-password']
        confirm_password = request.POST['confirm_password']

        if password == confirm_password:
            pk = request.session.get('uid')
            user = User.objects.get(pk = pk)
            user.set_password(password)
            user.is_active = True
            user.save()
            return redirect('logIn')
        else:
            messages.error(request, 'Mật khẩu không khớp')
            return redirect('forgot_password')

    return render(request, 'accounts/reset_password.html')


@login_required(login_url='logIn')
def my_account(request):
    if request.user.is_authenticated:
        user = request.user
        userProfile = get_object_or_404(UserProfile, user=user)

        # LIST READ
        list_reads = ListRead.objects.filter(user=user, status='saved')

        # PAYMENT
        payments = Payment.objects.filter(user=user)

        # ORDER
        order_exist = OrderCombo.objects.filter(user=user).exists()
        
        if order_exist:
            orders = OrderCombo.objects.filter(user=user)
        else:
            orders = None
        
        # RESET Password
        if request.method == "POST":
            password = request.POST['password']

            if user.check_password(password):
                new_password = request.POST['new-password']
                confirm_password = request.POST['confirm-password']

                if new_password == confirm_password:
                    user.set_password(new_password)
                    user.save()
                    return redirect('logIn')
                else:
                    messages.error(request, 'Mật khẩu không khớp')

    context = {
        'user': user,
        'userProfile': userProfile,
        'list_reads': list_reads,
        'payments': payments,
        'orders': orders
    }

    return render(request, 'accounts/personal-page.html', context)

