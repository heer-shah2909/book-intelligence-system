from openai import OpenAI
from .models import Book


# Connect to LM Studio

client = OpenAI(
    base_url="http://localhost:1234/v1",
    api_key="lm-studio"
)


def generate_insights():

    books = Book.objects.all()

    for book in books:

        # Skip processed books
        if book.summary:
            continue

        prompt = f"""
Summarize this book and predict its genre.

Description:
{book.description}

Return format:

Summary: <text>
Genre: <genre>
"""

        try:

            response = client.chat.completions.create(

                model="phi-3.1-mini-4k-instruct",

                messages=[
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]

            )

            result = response.choices[0].message.content

            parts = result.split("Genre:")

            book.summary = parts[0].replace(
                "Summary:",
                ""
            )

            if len(parts) > 1:
                book.genre = parts[1]

            book.save()

        except Exception as e:

            print("AI Error:", e)