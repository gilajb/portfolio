from rest_framework import serializers
from .models import ContactMessage


class ContactSerializer(serializers.ModelSerializer):
    """
    Validates and deserialises inbound contact form data.
    The `type` field is optional on the frontend (the user may not
    select an inquiry type), so we allow blank values.
    """

    class Meta:
        model  = ContactMessage
        fields = ["name", "email", "company", "type", "message", "created_at"]
        read_only_fields = ["created_at"]

    # ── Custom field-level validation ──────────────────────────────────
    def validate_name(self, value: str) -> str:
        value = value.strip()
        if len(value) < 2:
            raise serializers.ValidationError("Name must be at least 2 characters.")
        return value

    def validate_message(self, value: str) -> str:
        value = value.strip()
        if len(value) < 10:
            raise serializers.ValidationError("Message must be at least 10 characters.")
        if len(value) > 5000:
            raise serializers.ValidationError("Message must not exceed 5000 characters.")
        return value

    def validate_type(self, value: str) -> str:
        """Accept the frontend's human-readable labels and map to model choices."""
        label_to_key = {
            "engineering role":      "engineering_role",
            "strategic partnership": "strategic_partnership",
            "consulting":            "consulting",
            "speaking":              "speaking",
            "other":                 "other",
        }
        normalised = value.lower().strip()
        return label_to_key.get(normalised, "other")
