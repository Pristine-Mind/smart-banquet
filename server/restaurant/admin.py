from django.contrib import admin

from .models import Booking


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = (
        "user_username",
        "user_email",
        "booking_type",
        "booking_date",
        "start_time",
        "party_size",
        "status",
        "created_at",
        "updated_at",
    )

    list_editable = ("status",)
    list_filter = ("booking_type", "status", "booking_date", "restaurant_city")
    search_fields = ("user_username", "user_email", "event_title")
    fieldsets = (
        ("Booking Details", {"fields": ("user_username", "user_email", "booking_type", "restaurant_city")}),
        ("Scheduling", {"fields": ("booking_date", "start_time", "end_time", "party_size")}),
        (
            "Event Information (if applicable)",
            {
                "fields": ("event_title", "event_ticket_price", "total_price"),
                "description": "Fill these fields only for event bookings.",
            },
        ),
        ("Additional Information", {"fields": ("special_requests",)}),
        ("Admin Details", {"fields": ("status", "created_at", "updated_at"), "classes": ("collapse",)}),
    )

    readonly_fields = ("created_at", "updated_at")

    ordering = ("-booking_date", "-start_time")
    actions = ["delete_selected"]

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs
