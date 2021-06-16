from django.urls import path
from . import views

urlpatterns=[
    path('',views.Todoview,name='Todoview'),
    #path('add',views.add,name='add')
]