from django.contrib import admin
from .models import ContactMessage


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display  = ("name", "email", "type", "company", "is_read", "created_at")
    list_filter   = ("type", "is_read", "created_at")
    search_fields = ("name", "email", "company", "message")
    readonly_fields = ("name", "email", "company", "type", "message", "created_at")
    ordering      = ("-created_at",)

    actions = ["mark_as_read"]

    @admin.action(description="Mark selected messages as read")
    def mark_as_read(self, request, queryset):
        updated = queryset.update(is_read=True)
        self.message_user(request, f"{updated} message(s) marked as read.")
