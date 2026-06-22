from django.urls import path  # type: ignore[import]
from .views import ContactFormView

urlpatterns = [
    # POST /api/contact/
    path("contact/", ContactFormView.as_view(), name="contact-form"),
]
