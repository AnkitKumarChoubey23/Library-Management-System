import React, { useEffect, useState } from 'react';
import { getAllBooks, addBook, updateBook, deleteBook } from '../services/bookservice';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: '', author: '', year: '', genre: '', status: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const data = await getAllBooks();
    setBooks(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateBook(editId, form);
      setEditId(null);
    } else {
      await addBook(form);
    }
    setForm({ title: '', author: '', year: '', genre: '', status: '' });
    loadBooks();
  };

  const handleEdit = (book) => {
    setForm(book);
    setEditId(book.id);
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    loadBooks();
  };

  return (
    <div className="container">
      <h2>📚 Library Book Management</h2>

      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" value={form.author} onChange={handleChange} required />
        <input type="number" name="year" placeholder="Year" value={form.year} onChange={handleChange} required />
        <input type="text" name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} required />
        <input type="text" name="status" placeholder="Status" value={form.status} onChange={handleChange} required />
        <button type="submit">{editId ? 'Update Book' : 'Add Book'}</button>
      </form>

      <table border="1" className="book-table">
        <thead>
          <tr>
            <th>ID</th><th>Title</th><th>Author</th><th>Year</th><th>Genre</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>{book.genre}</td>
              <td>{book.status}</td>
              <td>
                <button onClick={() => handleEdit(book)}>Edit</button>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
