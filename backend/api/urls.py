from django.contrib import admin
from django.urls import path,include
from api import views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/',views.registerUser, name="register"),
    path('user/details/<str:token>',views.userDetails, name="user-details"),

    #upload image
    path('upload-image/',views.uploadImage, name="image-upload"),

    #read 
    path('story/list',views.listStory, name="list-story-read"),
    path('story/<str:storyid>',views.storyDetails, name="details-story-read"),
    path('story/<str:storyid>/chapter/list',views.listChapter, name="list-chapter"),
    path('story/<str:storyid>/chapter/<str:chapterid>',views.readChapter, name="list-chapter"),

    #author
    path('admin/story/list',views.listAdminStory, name="list-story-admin"),
    path('admin/story/<str:storyid>/chapter/list',views.listAdminChapter, name="list-chapter-admin"),
    path('story/create/',views.createStory, name="create-story-admin"),
    path('story/<str:storyid>/chapter/create/',views.createChapter, name="create-chapter-admin"),
    path('story/<str:storyid>/chapter/<str:chapterid>/update',views.updateChapter, name="update-chapter-admin"),
    path('story/<str:storyid>/update',views.updateStory, name="update-chapter-admin"),

    #delete
    path('delete-chapter/<int:chapter_id>/', views.deleteChapter, name='delete-chapter'),
    path('delete-story/<int:story_id>/', views.deleteStory, name='delete-story'),
    
    #layout
    path('mostpopular',views.mostpopular, name="mostpopular"),
    

    #contactus
    path('contactUs',views.contactUs, name="ContactUs"),
    path('listContactUs',views.listContactUs, name="listContactUs"),
]

