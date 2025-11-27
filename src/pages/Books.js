import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import BookCard from "../Components/BookCard";
import "../styles/Books.css";
import img1984 from "../assets/1984.jpg";
import imgAlchemist from "../assets/alchemist.jpg";
import imgAtomic from "../assets/atomic.jpg";

const Books = () => {
  const allBooks = [
    { title: "1984", author: "George Orwell", price: 10, img: img1984 },
    { title: "The Alchemist", author: "Paulo Coelho", price: 12, img: imgAlchemist },
    { title: "Atomic Habits", author: "James Clear", price: 15, img: imgAtomic },
 
  ];

  const [search, setSearch] = useState("");

  const filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

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
        {filteredBooks.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            price={book.price}
            img={book.img}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Books;
