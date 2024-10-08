from django.contrib import admin
from django.urls import path,include
from api import views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/',views.registerUser, name="register"),

    #upload image
    path('upload-image/',views.uploadImage, name="image-upload"),
    #read 
    path('story/list',views.listStory, name="list-story-read"),
    path('story/<str:storyid>',views.storyDetails, name="details-story-read"),
    path('story/<str:storyid>/chapter/list',views.listChapter, name="list-chapter"),
    path('story/<str:storyid>/chapter/<str:chapterid>',views.readChapter, name="list-chapter"),

    #author
    path('story/create',views.createStory, name="create-story-authur"),
    path('story/<str:storyid>/chapter/create',views.createChapter, name="create-chapter-author"),
]

