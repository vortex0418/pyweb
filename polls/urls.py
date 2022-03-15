from django.urls import path
from . import views

app_name = 'polls'    #네임 스페이스(소속)

urlpatterns = [
    path('polllist/', views.polllist, name='polllist'),      #127.0.0.1:8000/polls/
    path('<int:pk>/', views.poll_detail, name='poll_detail'),  #127.0.0.1:8000/polls/1/
    path('<int:pk>/vote/', views.vote, name='vote')  #127.0.0.1:8000/poll/1/vote
]