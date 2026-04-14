# book-intelligence-system: INTELDOCS
A full-stack document intelligence platform that enables users to browse books, perform semantic search, ask natural language questions, and generate insights using a Django backend and Next.js frontend.

Features:
  1. Browse available books stored in the system
  2. Perform semantic search across book content
  3. Ask natural language questions about books
  4. Generate intelligent responses using an LLM
  5. REST API-based backend integration
  6. Responsive web interface using standard CSS

Tech Stack:

  Frontend:
    Next.js
    React
    CSS (standard styling)
  
  Backend:
    Django
    Django REST Framework
    SQLite database
  
  AI Components:
    Large Language Model integration using LM Studio 
    Semantic Search

Project Structure: 

  book-intelligence-system/
  
  ├── backend/
  │   ├── library/
  │   ├── config/
  │   ├── manage.py
  │   └── db.sqlite3
  
  ├── frontend/
  │   ├── src/
  │   └── public/
  
  └── README.md

Setup Backend:

  cd backend
  pip install -r requirements.txt
  python manage.py runserver

Setup Frontend:
  cd frontend
  npm install
  npm run dev

Running the Project:

  Backend:
  
    python manage.py runserver
  
  Frontend:
  
    npm run dev

  Screenshots: 
  <img width="940" height="435" alt="image" src="https://github.com/user-attachments/assets/43b5172f-9a85-4b3a-96f6-35d070fb1563" />
  <img width="940" height="436" alt="image" src="https://github.com/user-attachments/assets/45178202-c8bc-41aa-b41c-314fbfb96996" />
  <img width="940" height="429" alt="image" src="https://github.com/user-attachments/assets/a4894888-c6e1-44d2-90e9-c56a1d11659c" />
  <img width="940" height="427" alt="image" src="https://github.com/user-attachments/assets/b0b75bad-58d4-4cd4-a6e6-f69928d518eb" />
  <img width="940" height="434" alt="image" src="https://github.com/user-attachments/assets/c5f2ac30-0d77-407d-a73c-70b712871c39" />
  <img width="940" height="431" alt="image" src="https://github.com/user-attachments/assets/10035fbc-f478-43e0-b765-8089d6823934" />

Future Improvements: 
  Add user authentication
  Support document upload
  Improve search ranking
  Deploy to cloud platform
  Add caching for faster responses

Author
Heer Shah

GitHub:
https://github.com/heer-shah2909
