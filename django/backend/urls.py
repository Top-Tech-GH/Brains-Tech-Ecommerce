from django.urls import path
from .views import index

urlpatterns = [
    path('machine', index.as_view()),
]