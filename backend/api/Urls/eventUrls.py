from django.urls import path
from api.Views import eventViews as views

urlpatterns = [
    path('list/latest', views.listLatestEvent , name='listEvent'),
    path('list/upcoming', views.listUpcomingEvent , name='listEvent'),
    path('list/anoucement', views.listAnocement , name='listAnocement'),

    path('create/anoucement', views.createAnocement , name='createAnocement'),

]