from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.redirect_to_login, name='root_redirect'),  # root redirects to login page
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('register/', views.register, name='register'),
    path('home/', views.home, name='home'),
    path('logout/', auth_views.LogoutView.as_view(next_page='login'), name='logout'),
]
