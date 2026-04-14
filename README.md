# Book Intelligence System: IntelDocs

A full-stack document intelligence platform that enables users to browse books, perform semantic search, ask natural language questions, and generate insights using a Django backend and Next.js frontend.

This system allows users to interact with book content using natural language queries and retrieve meaningful responses through backend processing and intelligent search.

---

# Screenshots of the UI

(Add 3–4 screenshots here after running the project)

Create a folder named:

screenshots/
<img width="940" height="435" alt="image" src="https://github.com/user-attachments/assets/2e99d4ea-09b5-4cc0-8fa7-e4a0c0e36607" />
<img width="940" height="429" alt="image" src="https://github.com/user-attachments/assets/c25a6c60-4bba-4173-a031-e09f2b8cf73a" />
<img width="940" height="427" alt="image" src="https://github.com/user-attachments/assets/ea4d97d4-69eb-4300-939b-b4e8b55f57df" />
<img width="940" height="434" alt="image" src="https://github.com/user-attachments/assets/baa486be-c383-4df7-8f6f-7c79d1ead159" />
<img width="940" height="431" alt="image" src="https://github.com/user-attachments/assets/c8991b6d-621c-4800-9827-522d61bbec2b" />

---

# Project Structure

book-intelligence-system/

backend/
│
├── library/
├── config/
├── manage.py
└── db.sqlite3

frontend/
│
├── src/
└── public/

README.md

---

# Setup Instructions for Running the Application

## Step 1: Clone Repository

git clone https://github.com/heer-shah2909/book-intelligence-system.git

cd book-intelligence-system

---

## Step 2: Backend Setup (Django)

Navigate to backend:

cd backend

Install dependencies:

pip install -r requirements.txt

Run migrations:

python manage.py migrate

Start backend server:

python manage.py runserver

Backend will run at:

http://127.0.0.1:8000/

---

## Step 3: Frontend Setup (Next.js)

Navigate to frontend:

cd frontend

Install dependencies:

npm install

Start frontend server:

npm run dev

Frontend will run at:

http://localhost:3000/

---

# API Documentation

The backend provides REST API endpoints to manage books, search content, and process user queries.

## Base URL

http://127.0.0.1:8000/

## Endpoints

### Get All Books

GET /api/books/

Description:  
Returns a list of all books stored in the system.

---

### Search Books

GET /api/search/?query=keyword

Description:  
Searches book content based on a keyword or phrase.

Example:

/api/search/?query=machine learning

---

### Ask Question

POST /api/query/

Description:  
Accepts a natural language question and returns an intelligent response.

Request Body:

{
  "question": "What is artificial intelligence?"
}

Response:

{
  "answer": "Artificial Intelligence is the simulation of human intelligence by machines."
}

---

# Sample Questions and Answers

These are example queries that can be tested in the system.

Question 1:  
What is machine learning?

Expected Output:  
Returns a summary explaining machine learning concepts.

---

Question 2:  
Find books related to artificial intelligence.

Expected Output:  
Displays books that match artificial intelligence topics.

---

Question 3:  
Explain deep learning.

Expected Output:  
Returns a detailed explanation from the stored book content.

---

# Requirements File

Make sure the following file exists:

backend/requirements.txt

This file should contain all backend dependencies required to run the Django application.

Example dependencies:

Django  
djangorestframework  
requests  
numpy  

(Your actual requirements.txt should contain all installed packages.)

---

# Sample Test Data

Sample book data is stored in the database and used for testing search and question-answer functionality.

Example test inputs:

machine learning  
artificial intelligence  
data science  

These can be used to verify search and response generation.

---

# How the System Works

1. The user interacts with the frontend interface.
2. The frontend sends requests to the Django backend.
3. The backend processes search or query requests.
4. The backend retrieves relevant data from stored books.
5. The response is sent back to the frontend.
6. The frontend displays the result to the user.

---

# Notes

- The backend is built using Django.
- The frontend is built using Next.js.
- Styling is implemented using standard CSS.
- SQLite database is used for storing book data.
- REST APIs handle communication between frontend and backend.

---

# Author

Heer Shah

GitHub:
https://github.com/heer-shah2909
