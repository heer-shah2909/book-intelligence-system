from django.contrib import admin
from django.urls import path

from library.views import (
    book_list,
    book_detail,
    scrape_books_view,
    generate_insights_view,
    build_embeddings_view,
    ask_question_view,
    smart_search_view
)

urlpatterns = [

    path("admin/", admin.site.urls),

    # Books
    path("books/", book_list),
    path("books/<int:pk>/", book_detail),

    # Scraping
    path("scrape-books/", scrape_books_view),

    # Insights
    path("insights/", generate_insights_view),

    # Embeddings
    path("build-embeddings/", build_embeddings_view),

    # RAG Q&A
    path("ask/", ask_question_view),

    # Smart Search
    path("smart-search/", smart_search_view),
]