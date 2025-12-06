📚 Library Management System

A full-stack CRUD web application built using React (Vite) for the frontend, Node.js + Express for the backend, and MySQL for the database.
This system allows users to add, view, edit, and delete books in a library.

🚀 Features
Frontend (React + Vite)

Add new books

Edit existing book details

Delete books

View all books in structured table format

Dynamic real-time updates after CRUD operations

Axios-based API calls

Fully responsive UI with Bootstrap

Backend (Node.js + Express)

RESTful API (GET, POST, PUT, DELETE)

Safe parameterized SQL queries

CORS enabled

JSON parsing + URL-encoded support

Database (MySQL)

Stores book data with the following fields:

id

title

author

genre

year

status

🏗️ Tech Stack
Layer	Technology
Frontend	React (Vite), JavaScript, Axios, Bootstrap
Backend	Node.js, Express.js
Database	MySQL
Tools	npm, SQL CLI, Vite
📂 Project Folder Structure
Library_Management_System/
│
├── backend_server/
│   ├── app.js
│   ├── package.json
│   └── node_modules/
│
└── Frontend/
    └── book-app/
        ├── index.html
        ├── package.json
        ├── src/
        │   ├── App.jsx
        │   ├── App.css
        │   ├── main.jsx
        │   ├── index.css
        │   ├── components/
        │   │    └── Books.jsx
        │   └── services/
        │        └── bookservice.js
        └── public/

🛠️ Installation & Setup Guide
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/<repo-name>.git
cd Library_Management_System

2️⃣ Backend Setup
Navigate into backend folder:
cd backend_server

Install dependencies:
npm install

Start backend server:
node app.js


Backend runs on:
👉 http://localhost:1234

3️⃣ Database Setup (MySQL)

Run the following SQL:

CREATE DATABASE library_db;

USE library_db;

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  author VARCHAR(100),
  year INT,
  genre VARCHAR(50),
  status VARCHAR(20)
);
