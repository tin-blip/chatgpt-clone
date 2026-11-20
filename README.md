💬 ChatGPT Clone – AI-Powered Programming Assistant

A full-stack AI-powered conversational application inspired by ChatGPT, built with React, Node.js, Express.js, MySQL, and Google Gemini API.

Unlike a general-purpose chatbot, this application is designed specifically for programming, software development, and technology-related discussions. It provides an interactive environment where users can ask technical questions, explore programming concepts, debug code, and receive AI-generated assistance.

🚀 Project Overview

This project replicates the core conversational experience of ChatGPT while introducing a specialized focus on technology and programming.

By integrating Google's Gemini API, the application generates intelligent responses to programming-related questions. It combines a modern React-based interface with a Node.js and Express backend, while MySQL handles persistent conversation storage.

The project demonstrates practical full-stack development skills, including frontend architecture, REST API development, database integration, and generative AI integration.

✨ Key Features

- AI-Powered Conversations: Integrated Google Gemini API for intelligent, AI-generated responses.
- Programming-Focused Assistant: Specialized for programming, software development, debugging, and technology-related discussions.
- Interactive Chat Interface: Modern and intuitive interface inspired by ChatGPT.
- Persistent Conversation History: Conversations are saved in MySQL, allowing users to revisit previous chats.
- Sidebar Navigation: Convenient navigation through the chat interface.
- Message Management: Structured display of user messages and AI-generated responses.
- Backend API Architecture: Organized backend using routes, controllers, services, and middleware.
- Database Integration: MySQL database integration for storing conversation data.

🛠️ Technologies Used

Category| Technologies
Frontend| React.js, JavaScript
Build Tool| Vite
Styling| CSS, CSS Modules
Backend| Node.js, Express.js
AI Integration| Google Gemini API
Database| MySQL
Database Environment| MAMP
Version Control| Git, GitHub

📂 Project Structure

```text
chatgpt-clone/
│
├── backend/
│   ├── db/
│   │   ├── db.config.js
│   │   └── schema.sql
│   │
│   ├── src/
│   │   ├── api/
│   │   │   ├── admin/
│   │   │   ├── chat/
│   │   │   │   ├── controller/
│   │   │   │   │   └── chat.controller.js
│   │   │   │   ├── service/
│   │   │   │   │   └── chat.service.js
│   │   │   │   └── chat.route.js
│   │   │   └── main.routes.js
│   │   │
│   │   ├── middleware/
│   │   │   └── error-handler.js
│   │   │
│   │   └── utils/
│   │
│   ├── index.js
│   ├── package.json
│   └── .gitignore
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── Components/
│   │   │   ├── ChatHeader/
│   │   │   │   ├── ChatHeader.jsx
│   │   │   │   └── ChatHeader.module.css
│   │   │   │
│   │   │   ├── ChatInput/
│   │   │   │   ├── ChatInput.jsx
│   │   │   │   └── ChatInput.module.css
│   │   │   │
│   │   │   ├── ChatMessage/
│   │   │   │   ├── ChatMessage.jsx
│   │   │   │   └── ChatMessage.module.css
│   │   │   │
│   │   │   ├── MessageList/
│   │   │   │   ├── MessageList.jsx
│   │   │   │   └── MessageList.module.css
│   │   │   │
│   │   │   └── Sidebar/
│   │   │       ├── Sidebar.jsx
│   │   │       └── Sidebar.module.css
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── eslint.config.js
│   ├── vite.config.js
│   ├── package.json
│   └── .gitignore
│
├── screenshots/
│   ├── chat-interface.png
│   └── programming-response.png
│
├── .gitignore
└── [README.md](https://readme.md/)
```


🖥️ Application Preview

Chat Interface

"Chat Interface" (screenshots/chat-interface.png)

AI-Generated Response

"Programming Response" (screenshots/programming-response.png)

⚙️ Getting Started

Prerequisites

- Node.js
- npm
- Git
- MAMP with MySQL
- Google Gemini API key

1. Clone the Repository

git clone YOUR_REPOSITORY_URL
cd chatgpt-clone

2. Install Backend Dependencies

cd backend
npm install

3. Install Frontend Dependencies

Open another terminal:

cd frontend
npm install

4. Configure the Database

- Start MySQL through MAMP.
- Create the required database.
- Import the SQL schema provided in "backend/db/schema.sql".
- Configure your database connection using the backend environment variables.

5. Configure Environment Variables

Create a ".env" file inside the backend directory.

Add your Gemini API key and database configuration using the variable names expected by your backend code.

Example:

GEMINI_API_KEY=your_gemini_api_key

Never commit actual API keys, database passwords, or environment files to GitHub.

6. Run the Application

Start the backend and frontend using the development scripts defined in their respective "package.json" files.

Open the local frontend URL in your browser to access the application.

🎯 Project Focus

This project explores how generative AI can be integrated into specialized web applications.

By combining AI capabilities with full-stack technologies, it demonstrates the development of a domain-specific conversational assistant designed to support programming and software development learning.

🔮 Future Improvements

- Enhanced conversation search and management.
- Improved chat organization.
- More advanced programming assistance.
- Enhanced error handling.
- Responsive design improvements.
- Deployment for public access.

👩‍💻 Author

Developed as a full-stack development project to explore modern web technologies, backend development, database management, and generative AI integration.

---

Built with React, Node.js, Express.js, MySQL, and Google Gemini API.
