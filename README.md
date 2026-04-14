# Book Intelligence System: IntelDocs

A full-stack document intelligence platform that enables users to browse books, perform semantic search, ask natural language questions, and generate insights using a Django backend and Next.js frontend.

This system allows users to interact with book content using natural language queries and retrieve meaningful responses through backend processing and intelligent search.

---

# Screenshots of the UI
<img width="940" height="435" alt="image" src="https://github.com/user-attachments/assets/2e99d4ea-09b5-4cc0-8fa7-e4a0c0e36607" />
<img width="940" height="429" alt="image" src="https://github.com/user-attachments/assets/c25a6c60-4bba-4173-a031-e09f2b8cf73a" />
<img width="940" height="427" alt="image" src="https://github.com/user-attachments/assets/ea4d97d4-69eb-4300-939b-b4e8b55f57df" />
<img width="940" height="434" alt="image" src="https://github.com/user-attachments/assets/baa486be-c383-4df7-8f6f-7c79d1ead159" />
<img width="940" height="431" alt="image" src="https://github.com/user-attachments/assets/c8991b6d-621c-4800-9827-522d61bbec2b" />

---

# Project Structure

book-intelligence-system/

backend/
    library/
    config/
    manage.py

frontend/
    src/
    public/
    package.json

samples/
    sample_questions.txt

screenshots/
    dashboard.png
    ask_questions.png
    smart_search.png
    insights.png

requirements.txt  
README.md

---

# Setup Instructions

## Clone Repository

git clone https://github.com/heer-shah2909/book-intelligence-system.git

cd book-intelligence-system

---

## Backend Setup

cd backend

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver

Backend runs at:

http://127.0.0.1:8000/

---

## Frontend Setup

cd frontend

npm install

npm run dev

Frontend runs at:

http://localhost:3000/

Note: Start backend before frontend.

---

# API Documentation

Base URL:

http://127.0.0.1:8000/

## Get All Books

GET /api/books/

Returns list of all books.

---

## Search Books

GET /api/search/?query=keyword

Searches books using keywords.

Example:

/api/search/?query=romance

---

## Ask Question

POST /api/query/

Request Body:

{
  "question": "What is the theme of Pride and Prejudice?"
}

Response:

{
  "answer": "Pride and Prejudice explores themes of love, social class, and relationships."
}

---

## Generate Insights

GET /api/insights/

Returns summarized insights about books.

---

# Sample Questions

Show all available books.

Find books written by Jane Austen.

Give a summary of "Pride and Prejudice".

Search for books related to psychology.

---

# Requirements

django  
djangorestframework  
pandas  
numpy  
scikit-learn  
requests  
beautifulsoup4  
sentence-transformers  
faiss-cpu  
langchain  
transformers  
torch  
openpyxl  
python-dotenv  

---

# System Workflow

1. User interacts with frontend interface.
2. Frontend sends request to Django backend.
3. Backend processes query or search request.
4. Relevant book data is retrieved.
5. Response is returned to frontend.
6. Frontend displays results to user.

---

# Notes

Backend: Django  
Frontend: Next.js  
Styling: Tailwind CSS  
Database: SQLite  
Communication: REST APIs  

---

# Author

Heer Shah

GitHub:  
https://github.com/heer-shah2909
