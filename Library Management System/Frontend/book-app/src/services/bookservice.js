const API_URL = "http://localhost:1234/books";

export const getAllBooks = async () => {
    const res = await fetch(API_URL);
    return res.json();
};

export const addBook = async (book) => {
    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
    });
};

export const updateBook = async (id, book) => {
    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
    });
};

export const deleteBook = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
};
