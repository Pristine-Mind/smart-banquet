from django.contrib import admin
from django.urls import path

from event.views import BookingCreateView
from restaurant.views import (
    BookingCreateAPIView,
    ContactCreateAPIView,
    MenuItemCreateAPIView,
    RestaurantCreateAPIView,
    ReviewCreateAPIView,
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("bookings/", BookingCreateView.as_view(), name="booking-create"),
    path("api/restaurants/create/", RestaurantCreateAPIView.as_view(), name="restaurant-create"),
    path("api/bookings/create/", BookingCreateAPIView.as_view(), name="booking-create"),
    path("api/menu-items/create/", MenuItemCreateAPIView.as_view(), name="menu-item-create"),
    path("api/reviews/create/", ReviewCreateAPIView.as_view(), name="review-create"),
    path("api/contact/create/", ContactCreateAPIView.as_view(), name="contact-create"),
]
