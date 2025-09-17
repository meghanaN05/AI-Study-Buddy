
# Project Title
🧩 AI Study Buddy

AI Study Buddy is a web-based educational chatbot application that helps students interact with AI to get answers, summaries, quizzes, and explanations based on uploaded notes. It has a React frontend and a Node.js/Express backend connected to MongoDB. The backend uses the OpenAI API (via GitHub API key) to generate AI responses.



## Installation:

Backend Setup:
1. Navigate to the backend folder:
cd backend

2. Install backend packages:
npm install express cors dotenv axios jsonwebtoken mongoose bcryptjs node-fetch
npm install -D nodemon
    
3. Create .env file in backend:
PORT=5000
MONGO_URI=<Your MongoDB URI>
GITHUB_KEY=<Your GitHub OpenAI API Key>
JWT_SECRET=<Your JWT secret>

4. Start backend server:

Development mode (auto-reload):
npm run dev
Production mode:
npm start

Frontend Setup:
1. Navigate to the frontend folder:
cd frontend

2. Install frontend packages:
npm install react react-dom react-router-dom axios jwt-decode zustand

3. Start frontend:
npm run dev

## Features

1.User authentication (register/login)

2.Chat interface with AI

3.Upload notes and get summaries

4.Quiz & flashcard generation

5.Secure JWT authentication

6.MongoDB storage for user data and chat history
