import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavBar from '../Components/NavBar';
import BookCard from '../Components/BookCard';
import CategoryCard from '../Components/CategoryCard';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import './../styles/Home.css';

const Home = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);

  // keep categories static for now (no need for db yet)
  const categories = ["Fiction", "Romance", "Sci-Fi", "Technology", "Self-Help"];

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        // grab first 3 books as "featured"
        const res = await axios.get("http://localhost:5000/api/books");
        setFeaturedBooks(res.data.slice(0, 3));
      } catch (err) {
        console.log(err);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <div>
      <NavBar />

      <div className="hero-section">
        <h1>Welcome to BookNest</h1>
        <p>Your gateway to a world of stories, ideas, and knowledge.</p>
        <Link to="/books" className="hero-btn">Browse Books</Link>
      </div>

      <h2 className="section-title">Featured Books</h2>
      <div className="book-grid">
        {featuredBooks.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            img={book.cover_image_url}
          />
        ))}
      </div>

      <h2 className="section-title">Book Categories</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <CategoryCard key={index} name={cat} />
        ))}
      </div>

      <div className="about-preview">
        <h2>About Us</h2>
        <p>BookNest is an online bookstore dedicated to bringing readers the best books across all genres.</p>
        <Link to="/about" className="about-btn">Read More</Link>
      </div>

      <div className="contact">
        <h2>Need Help?</h2>
        <p>Contact us and we’ll get back to you shortly.</p>
        <Link to="/contact" className="contact-btn">Contact Us</Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
