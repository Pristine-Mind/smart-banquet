from rest_framework import serializers

from .models import Booking, Event


class BookingSerializer(serializers.ModelSerializer):
    event = serializers.PrimaryKeyRelatedField(queryset=Event.objects.filter(is_active=True))

    class Meta:
        model = Booking
        fields = ["id", "event", "first_name", "last_name", "email", "phone", "booking_date", "status"]
        read_only_fields = ["id", "booking_date", "status"]

    def validate(self, data):
        event = data["event"]
        if event.bookings.count() >= event.capacity:
            raise serializers.ValidationError("This event is fully booked.")
        if Booking.objects.filter(event=event, email=data["email"]).exists():
            raise serializers.ValidationError("This email is already booked for the event.")
        return data
