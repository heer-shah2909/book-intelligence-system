from django.db import models
from rest_framework.decorators import api_view

from rest_framework.response import Response

from .models import Book

from .serializers import BookSerializer

from .scraper import scrape_books
from .insights import generate_insights
from .rag import build_embeddings, ask_rag
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .rag import smart_book_search
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .rag import ask_rag

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Book

@api_view(["GET"])
def book_list(request):

    books = Book.objects.all()

    serializer = BookSerializer(
        books,
        many=True
    )

    return Response(
        serializer.data
    )


@api_view(["GET"])
def book_detail(request, id):

    book = Book.objects.get(
        id=id
    )

    serializer = BookSerializer(
        book
    )

    return Response(
        serializer.data
    )


@api_view(["POST"])
def scrape_books_view(request):

    scrape_books()

    return Response(

        {"message": "Books scraped successfully"}

    )
    
@api_view(["GET"])   # <-- THIS FIXES 405
def generate_insights_view(request):

    total_books = Book.objects.count()

    avg_rating = (
        Book.objects
        .exclude(rating=None)
        .aggregate(avg=models.Avg("rating"))
        ["avg"]
    )

    top_books = (
        Book.objects
        .order_by("-rating")[:5]
        .values_list("title", flat=True)
    )

    insights_text = f"""
📚 Total Books: {total_books}

⭐ Average Rating: {round(avg_rating or 0, 2)}

🏆 Top Rated Books:
- """ + "\n- ".join(top_books)

    return Response({
        "insights": insights_text
    })
    
@api_view(["POST"])
def build_embeddings_view(request):

    build_embeddings()

    return Response({
        "message": "Embeddings created"
    })


@api_view(["POST"])
def ask_question_view(request):

    question = request.data.get("question")

    result = ask_rag(question)

    return Response(result)

@api_view(["POST"])
def smart_search_view(request):

    query = request.data.get(
        "query"
    )

    if not query:

        return Response({

            "error": "Query required"

        })

    results = smart_book_search(
        query
    )

    return Response(results)


@api_view(["POST"])
def ask_question_view(request):

    question = request.data.get("question")

    if not question:

        return Response({
            "error": "No question provided"
        })

    result = ask_rag(question)

    return Response({
        "answer": result["answer"]
    })