from django import forms
from .models import User

class UserForm(forms.ModelForm):
    # forms.PasswordInput() which means that the HTML form element will be a password input field. This allows the user to enter their password securely, as the characters entered will be obscured.
    password = forms.CharField(widget=forms.PasswordInput())
    confirm_password = forms.CharField(widget=forms.PasswordInput())
    class Meta:
        model = User
        fields = ['email', 'username', 'password']

    def clean(self):
        cleaned_data = super(UserForm, self).clean()
        password = cleaned_data.get('password')
        confirm_password = cleaned_data.get('confirm_password')

        if(password != confirm_password):
            raise forms.ValidationError(
                'Mật khẩu không khớp'
            )