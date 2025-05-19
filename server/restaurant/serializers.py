from django.core.exceptions import ObjectDoesNotExist
from django.utils import timezone
from rest_framework import serializers

from .models import Booking, Contact, MenuItem, Restaurant, Review


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = [
            "name",
            "address",
            "city",
            "phone",
            "email",
            "cuisine_type",
            "description",
            "capacity",
            "venue_capacity",
            "venue_price_per_hour",
            "opening_hours",
            "image",
        ]

    def validate(self, data):
        if data["capacity"] < 1 or data["venue_capacity"] < 1:
            raise serializers.ValidationError("Capacity and venue capacity must be positive.")
        return data


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = [
            "user_username",
            "user_email",
            "booking_type",
            "restaurant_name",
            "restaurant_city",
            "booking_date",
            "start_time",
            "end_time",
            "party_size",
            "event_title",
            "event_ticket_price",
            "special_requests",
        ]

    def validate(self, data):
        # Ensure restaurant exists
        restaurant_name = data.get("restaurant_name")
        try:
            restaurant = Restaurant.objects.get(name=restaurant_name)
        except ObjectDoesNotExist:
            raise serializers.ValidationError(f"Restaurant '{restaurant_name}' does not exist.")

        # Validate booking date is in the future
        booking_date = data.get("booking_date")
        if booking_date < timezone.now().date():
            raise serializers.ValidationError("Booking date must be in the future.")

        # Validate booking type and related fields
        booking_type = data.get("booking_type")
        party_size = data.get("party_size")
        end_time = data.get("end_time")
        event_title = data.get("event_title")
        event_ticket_price = data.get("event_ticket_price")

        if booking_type == "TABLE":
            if party_size > restaurant.capacity:
                raise serializers.ValidationError(f"Party size exceeds restaurant capacity ({restaurant.capacity}).")
        elif booking_type == "VENUE":
            if party_size > restaurant.venue_capacity:
                raise serializers.ValidationError(f"Party size exceeds venue capacity ({restaurant.venue_capacity}).")
            if not end_time:
                raise serializers.ValidationError("End time is required for venue bookings.")
            if not restaurant.venue_price_per_hour:
                raise serializers.ValidationError("Venue price per hour not set for this restaurant.")
        elif booking_type == "EVENT":
            if not event_title or event_ticket_price is None:
                raise serializers.ValidationError("Event title and ticket price are required for event bookings.")
        else:
            raise serializers.ValidationError("Invalid booking type.")

        # Set restaurant_city from restaurant
        data["restaurant_city"] = restaurant.city

        # Calculate total_price for venue or event bookings
        if booking_type == "VENUE":
            start_time = data["start_time"]
            hours = (end_time.hour * 60 + end_time.minute - start_time.hour * 60 - start_time.minute) / 60.0
            if hours <= 0:
                raise serializers.ValidationError("End time must be after start time.")
            data["total_price"] = restaurant.venue_price_per_hour * hours
        elif booking_type == "EVENT":
            data["total_price"] = event_ticket_price * party_size
        else:
            data["total_price"] = None

        return data


class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ["restaurant_name", "name", "description", "price", "category", "is_available"]

    def validate(self, data):
        # Ensure restaurant exists
        restaurant_name = data.get("restaurant_name")
        if not Restaurant.objects.filter(name=restaurant_name).exists():
            raise serializers.ValidationError(f"Restaurant '{restaurant_name}' does not exist.")
        return data


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["user_username", "user_email", "restaurant_name", "rating", "comment"]

    def validate(self, data):
        # Ensure restaurant exists
        restaurant_name = data.get("restaurant_name")
        if not Restaurant.objects.filter(name=restaurant_name).exists():
            raise serializers.ValidationError(f"Restaurant '{restaurant_name}' does not exist.")
        # Ensure rating is 1-5
        if not 1 <= data.get("rating") <= 5:
            raise serializers.ValidationError("Rating must be between 1 and 5.")
        return data


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ["name", "email", "subject", "message"]
