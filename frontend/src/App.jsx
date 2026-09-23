import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [year, setYear] = useState("");

  const API = "http://localhost:5000/api/books";

  const getBooks = async () => {
    const res = await axios.get(API);
    setBooks(res.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const addBook = async (e) => {
    e.preventDefault();

    const res = await axios.post(API, {
      title,
      author,
      content,
      year
    });

    setBooks([...books, res.data]);

    setTitle("");
    setAuthor("");
    setContent("");
    setYear("");
    
  };

  const deleteBook = async (id) => {
    await axios.delete(`${API}/${id}`);
    setBooks(books.filter(book => book._id !== id));
  };

  return (
    <div>
      <h1>Book Collection</h1>

      <form onSubmit={addBook}>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
         <input
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />

        <input
          placeholder="Year"
          value={year}
          onChange={e => setYear(e.target.value)}
        />

        <button type="submit">Add Book</button>
      </form>

      <hr />

      {books.map(book => (
        <div key={book._id}>
          <h3>{book.title}</h3>
          <p>Content: {book.content}</p>
          <p>Author: {book.author}</p>
          <p>Year: {book.year}</p>

          <button onClick={() => deleteBook(book._id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;