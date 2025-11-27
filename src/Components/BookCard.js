import React from 'react';
import './../styles/BookCard.css';

const BookCard = ({ title, author, price, img }) => {
  return (
    <div className="book-card">
      <img src={img} alt={title} className="book-img" />
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <p className="book-price">${price}</p>
    </div>
  );
};

export default BookCard;
