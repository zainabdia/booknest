import React from 'react';
import './../styles/BookCard.css';

const BookCard = ({ title, author, price, img }) => {
  return (
    <div className="book-card">
      <img
        src={img}
        alt={title}
        className="book-img"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/200x280?text=No+Image";
        }}
      />
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <p className="book-price">${Number(price).toFixed(2)}</p>
    </div>
  );
};

export default BookCard;
