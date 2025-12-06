// Import required modules
const express = require('express');   // For creating the web server
const mysql = require('mysql2');      // For database connection
const cors = require('cors');         // To handle cross-origin requests

// Create Express app
const app = express();
const portNo = 1234; // Must match frontend API_URL port

// Middleware
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data (from forms)
app.use(express.json()); // Parses JSON bodies
app.use(cors()); // Allows cross-origin access from frontend (React app)

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // your MySQL username
  password: 'cdacacts',   // your MySQL password
  database: 'library_db'  // your database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

// SQL Queries
const getAll = "SELECT * FROM books";
const getById = "SELECT * FROM books WHERE id = ?";
const insert = "INSERT INTO books (title, author, year, genre, status) VALUES (?, ?, ?, ?, ?)";
const update = "UPDATE books SET title = ?, author = ?, year = ?, genre = ?, status = ? WHERE id = ?";
const delRec = "DELETE FROM books WHERE id = ?";

// ROUTES / API Endpoints

// 1️⃣ Get all books
app.get("/books", (req, res) => {
  db.query(getAll, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// 2️⃣ Get book by ID
app.get("/books/:id", (req, res) => {
  db.query(getById, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]); // results is array, we only need single object
  });
});

// 3️⃣ Add new book
app.post("/books", (req, res) => {
  const { title, author, year, genre, status } = req.body;
  db.query(insert, [title, author, year, genre, status], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: results.insertId, title, author, year, genre, status });
  });
});

// 4️⃣ Update existing book
app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author, year, genre, status } = req.body;
  db.query(update, [title, author, year, genre, status, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Book updated successfully" });
  });
});

// 5️⃣ Delete a book
app.delete("/books/:id", (req, res) => {
  db.query(delRec, [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Book deleted successfully" });
  });
});

// Start the server
app.listen(portNo, () => {
  console.log(`🚀 Server is running on http://localhost:${portNo}`);
});

