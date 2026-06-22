"""
Tests for the contact form API.

Run with:
    python manage.py test contact
"""

from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status

from .models import ContactMessage


class ContactFormAPITest(TestCase):
    def setUp(self):
        self.client  = APIClient()
        self.url     = reverse("contact-form")
        self.valid   = {
            "name":    "Joy Chepkorir Bett",
            "email":   "joy@example.com",
            "company": "TestCorp",
            "type":    "Consulting",
            "message": "I'd love to work with you on an exciting project.",
        }

    # ── Happy path ─────────────────────────────────────────────────────
    def test_valid_submission_returns_201(self):
        response = self.client.post(self.url, self.valid, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["status"], "transmitted")

    def test_valid_submission_persists_to_db(self):
        self.client.post(self.url, self.valid, format="json")
        self.assertEqual(ContactMessage.objects.count(), 1)
        msg = ContactMessage.objects.first()
        self.assertEqual(msg.name,  "Joy Chepkorir Bett")
        self.assertEqual(msg.email, "joy@example.com")

    def test_company_is_optional(self):
        data = {**self.valid}
        del data["company"]
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_type_is_optional(self):
        data = {**self.valid}
        del data["type"]
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    # ── Validation errors ──────────────────────────────────────────────
    def test_missing_name_returns_400(self):
        data = {**self.valid, "name": ""}
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("name", response.data["errors"])

    def test_invalid_email_returns_400(self):
        data = {**self.valid, "email": "not-an-email"}
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("email", response.data["errors"])

    def test_missing_message_returns_400(self):
        data = {**self.valid, "message": ""}
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("message", response.data["errors"])

    def test_short_message_returns_400(self):
        data = {**self.valid, "message": "hi"}
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    # ── Method not allowed ─────────────────────────────────────────────
    def test_get_not_allowed(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
