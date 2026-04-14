from django.db import models


class Book(models.Model):

    # Basic Book Information

    title = models.CharField(
        max_length=255
    )

    author = models.CharField(
        max_length=255,
        blank=True
    )

    description = models.TextField()

    rating = models.FloatField()

    book_url = models.URLField(
        unique=True
    )

    # AI Generated Fields

    summary = models.TextField(
        blank=True,
        null=True
    )

    genre = models.CharField(
        max_length=100,
        blank=True
    )

    def __str__(self):

        return self.title