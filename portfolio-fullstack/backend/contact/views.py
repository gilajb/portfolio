"""
Contact form API views.

POST /api/contact/
  - Validates the payload with ContactSerializer
  - Persists the message to the database
  - Fires a notification email to Joy
  - Returns 201 { "status": "transmitted" } on success
"""

import logging

from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import ContactMessage
from .serializers import ContactSerializer

logger = logging.getLogger(__name__)


class ContactFormView(APIView):
    """
    Accepts a contact form submission, stores it, and sends a
    notification email to the portfolio owner.
    """

    def post(self, request):
        serializer = ContactSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                {"errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # ── Persist ────────────────────────────────────────────────────
        message_obj: ContactMessage = serializer.save()

        # ── Send notification email ────────────────────────────────────
        try:
            self._send_notification(message_obj)
        except Exception as exc:
            # Email failure must NOT block the 201 response — the
            # message is already saved in the database.
            logger.error(
                "Contact notification email failed for message id=%s: %s",
                message_obj.pk,
                exc,
            )

        return Response(
            {"status": "transmitted", "id": message_obj.pk},
            status=status.HTTP_201_CREATED,
        )

    # ── Private helpers ────────────────────────────────────────────────
    @staticmethod
    def _send_notification(msg: ContactMessage) -> None:
        """Build and dispatch the notification email to Joy."""

        subject = (
            f"[Portfolio] New {msg.get_type_display()} inquiry "
            f"from {msg.name}"
        )

        plain_body = (
            f"Name:    {msg.name}\n"
            f"Email:   {msg.email}\n"
            f"Company: {msg.company or '—'}\n"
            f"Type:    {msg.get_type_display()}\n"
            f"Date:    {msg.created_at:%Y-%m-%d %H:%M %Z}\n\n"
            f"Message:\n{msg.message}"
        )

        send_mail(
            subject=subject,
            message=plain_body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.CONTACT_NOTIFY_EMAIL],
            fail_silently=False,
        )
