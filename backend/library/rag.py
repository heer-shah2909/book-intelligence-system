import chromadb

from sentence_transformers import SentenceTransformer

from openai import OpenAI

from .models import Book


# Load embedding model

embedding_model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)


# Connect to ChromaDB

chroma_client = chromadb.Client()

collection = chroma_client.get_or_create_collection(
    name="books_collection"
)


# Connect to LM Studio

llm_client = OpenAI(
    base_url="http://localhost:1234/v1",
    api_key="lm-studio"
)


# Text chunking

def chunk_text(text, chunk_size=500, overlap=50):

    chunks = []

    start = 0

    while start < len(text):

        end = start + chunk_size

        chunk = text[start:end]

        chunks.append(chunk)

        start += chunk_size - overlap

    return chunks


# Build embeddings

def build_embeddings():

    books = Book.objects.all()

    for book in books:

        chunks = chunk_text(
            book.description
        )

        embeddings = embedding_model.encode(
            chunks
        )

        for i, emb in enumerate(embeddings):

            collection.add(

                embeddings=[emb.tolist()],

                documents=[chunks[i]],

                ids=[f"{book.id}_{i}"]

            )


# Query system

def ask_rag(question):

    query_embedding = embedding_model.encode(
        [question]
    )[0]

    results = collection.query(

        query_embeddings=[
            query_embedding.tolist()
        ],

        n_results=3

    )

    context = "\n".join(
        results["documents"][0]
    )

    prompt = f"""
Answer the question using the context.

Context:
{context}

Question:
{question}

Answer:
"""

    response = llm_client.chat.completions.create(

        model="phi-3.1-mini-4k-instruct",

        messages=[

            {
                "role": "user",
                "content": prompt
            }

        ]

    )

    answer = response.choices[0].message.content

    return {

        "answer": answer,

        "source": context

    }
    
# Smart Semantic Search

def smart_book_search(query_text):

    # Convert search query to embedding
    query_embedding = embedding_model.encode(
        [query_text]
    )[0]

    # Search similar chunks
    results = collection.query(

        query_embeddings=[
            query_embedding.tolist()
        ],

        n_results=10

    )

    book_ids = set()

    # Extract book IDs from chunk IDs
    for rid in results["ids"][0]:

        book_id = int(
            rid.split("_")[0]
        )

        book_ids.add(book_id)

    matched_books = []

    # Fetch book details
    for book_id in list(book_ids)[:5]:

        try:

            book = Book.objects.get(
                id=book_id
            )

            matched_books.append({

                "id": book.id,
                "title": book.title,
                "rating": book.rating,
                "summary": book.summary if book.summary else book.description

            })

        except Book.DoesNotExist:

            pass

    return matched_books