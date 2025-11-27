import React from 'react';
import NavBar from '../Components/NavBar';
import BookCard from '../Components/BookCard';
import CategoryCard from '../Components/CategoryCard';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import './../styles/Home.css';
import img1984 from "../assets/1984.jpg";
import Alchemist from "../assets/alchemist.jpg";
import Atomic from "../assets/atomic.jpg";


const Home = () => {
  
  const featuredBooks = [
    { title: "1984", author: "George Orwell", price: 10, img: img1984 },
    { title: "The Alchemist", author: "Paulo Coelho", price: 12, img: Alchemist },
    { title: "Atomic Habits", author: "James Clear", price: 15, img: Atomic },
  ];

  
  const categories = ["Fiction", "Romance", "Sci-Fi", "Technology", "Self-Help"];

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
        {featuredBooks.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            price={book.price}
            img={book.img}
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
