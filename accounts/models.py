from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('Bạn cần nhập Email')
        
        if not username:
            raise ValueError('Bạn cần nhập Tên tài khoản')

        user =  self.model(
            email = self.normalize_email(email),
            username = username
        )
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self,username, email, password = None):
        user = self.create_user(
            email = self.normalize_email(email),
            username = username,
            password = password,
        )
        user.is_admin = True
        user.is_active = True
        user.is_staff = True
        user.is_superadmin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(max_length=100, unique=True, error_messages={
        'unique': 'Email đã tồn tại'
    })
    username = models.CharField(max_length=50, unique=True, error_messages={
        'unique': 'Tài khoản đã tồn tại.'
    })
    date_joined = models.DateTimeField(auto_now_add=True)
    is_staff = models.BooleanField(default = False)
    is_active = models.BooleanField(default = False)
    is_admin = models.BooleanField(default = False)
    is_superadmin = models.BooleanField(default = False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    # The default manager for a model is called objects, but you can create custom managers and assign them to different attributes of the model.
    # This is how Django knows which manager to use for the 'User' model.
    objects = UserManager()

    def __str__(self) -> str:
        return self.username

    def has_perm(self, perm, obj = None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, null=True)
    profile_picture =models.ImageField(upload_to='user/profile_picture',default='user/profile_picture/default-avatar.jpeg' ,blank=True, null=True)
    number_lt = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username