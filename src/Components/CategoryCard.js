import React from 'react';
import './../styles/CategoryCard.css';

const CategoryCard = ({ name }) => {
  return (
    <div className="category-card">
      <p>{name}</p>
    </div>
  );
};

export default CategoryCard;
