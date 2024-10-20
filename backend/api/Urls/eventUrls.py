from django.contrib import admin
from django.urls import path,include
from api.Views import eventViews as views

urlpatterns = [
    path('list/latest', views.listLatestEvent , name='listEvent'),
    path('list/upcoming', views.listUpcomingEvent , name='listEvent'),
    path('list/anoucement', views.listAnocement , name='listAnocement'),


]