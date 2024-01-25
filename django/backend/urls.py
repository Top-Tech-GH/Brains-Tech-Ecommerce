from django.urls import path
from .views import *

urlpatterns = [
    path('machine', index.as_view()),
    path('brand', CreateBrand.as_view()),
    path('category', CreateCategory.as_view()),
    path('machine/<str:uu_id>', SingleProduct.as_view()),
]