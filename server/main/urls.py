from django.contrib import admin
from django.urls import path

from event.views import BookingCreateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('bookings/', BookingCreateView.as_view(), name='booking-create'),

]
