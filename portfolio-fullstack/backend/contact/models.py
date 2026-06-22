from django.db import models


class ContactMessage(models.Model):
    """
    Stores every contact form submission.
    Persisted to the database so messages are never lost if email
    delivery fails.
    """

    INQUIRY_TYPES = [
        ("engineering_role",       "Engineering Role"),
        ("strategic_partnership",  "Strategic Partnership"),
        ("consulting",             "Consulting"),
        ("speaking",               "Speaking"),
        ("other",                  "Other"),
    ]

    name       = models.CharField(max_length=120)
    email      = models.EmailField()
    company    = models.CharField(max_length=120, blank=True, default="")
    type       = models.CharField(
        max_length=40,
        choices=INQUIRY_TYPES,
        blank=True,
        default="other",
    )
    message    = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    # Soft-flag so Joy can mark messages as handled in the admin
    is_read    = models.BooleanField(default=False)

    class Meta:
        ordering            = ["-created_at"]
        verbose_name        = "Contact Message"
        verbose_name_plural = "Contact Messages"

    def __str__(self):
        return f"{self.name} <{self.email}> — {self.get_type_display()} ({self.created_at:%Y-%m-%d})"
