import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import BookCard from "../Components/BookCard";
import "../styles/Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/books?q=${search}`);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBooks();
  }, [search]);

  return (
    <>
      <NavBar />

      <div className="hero">
        <h1>All Books</h1>
        <p>Browse our complete collection of books across all genres.</p>
        <input
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />
      </div>

      <div className="grid">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            img={book.cover_image_url}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Books;
