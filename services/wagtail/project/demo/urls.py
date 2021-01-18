from django.urls import path

from demo import views

urlpatterns = [
    path('', view=views.home, name='home'),
]