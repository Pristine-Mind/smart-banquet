from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Restaurant(models.Model):
    name = models.CharField(max_length=100, unique=True)
    address = models.TextField()
    city = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    cuisine_type = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    capacity = models.PositiveIntegerField()
    venue_capacity = models.PositiveIntegerField()
    venue_price_per_hour = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    opening_hours = models.CharField(max_length=100)
    image = models.ImageField(upload_to="restaurants/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]


class Booking(models.Model):
    BOOKING_TYPE_CHOICES = (
        ("TABLE", "Table Reservation"),
        ("VENUE", "Venue Booking"),
        ("EVENT", "Event Booking"),
    )
    STATUS_CHOICES = (
        ("PENDING", "Pending"),
        ("CONFIRMED", "Confirmed"),
        ("CANCELLED", "Cancelled"),
    )

    user_username = models.CharField(max_length=150)
    user_email = models.EmailField()
    booking_type = models.CharField(max_length=20, choices=BOOKING_TYPE_CHOICES)
    restaurant_name = models.CharField(max_length=100)
    restaurant_city = models.CharField(max_length=50)
    booking_date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField(null=True, blank=True)
    party_size = models.PositiveIntegerField(validators=[MinValueValidator(1)])
    event_title = models.CharField(max_length=200, blank=True)
    event_ticket_price = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    special_requests = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="PENDING")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user_username} - {self.booking_type} at {self.restaurant_name} on {self.booking_date}"

    class Meta:
        ordering = ["-booking_date", "-start_time"]
        unique_together = ["restaurant_name", "booking_date", "start_time", "booking_type"]


class MenuItem(models.Model):
    restaurant_name = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    category = models.CharField(max_length=50)
    is_available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} - {self.restaurant_name}"

    class Meta:
        ordering = ["category", "name"]


class Review(models.Model):
    user_username = models.CharField(max_length=150)
    user_email = models.EmailField()
    restaurant_name = models.CharField(max_length=100)
    rating = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user_username} - {self.restaurant_name} ({self.rating}/5)"

    class Meta:
        ordering = ["-created_at"]
        unique_together = ["user_username", "restaurant_name"]


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_resolved = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} - {self.subject}"

    class Meta:
        ordering = ["-created_at"]
