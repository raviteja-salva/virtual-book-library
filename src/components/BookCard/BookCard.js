import React from 'react';
import { Card , Title, Author, Genre, StarContainer, Rating, Star } from './BookCard.style';

const BookCard = ({ book }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star key={index} filled={index < Math.floor(book.rating)}>★</Star>
  ));

  return (
    <Card
      to={`/book/${book.id}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <Title>{book.title}</Title>
      <Author>by {book.author}</Author>
      <Genre>{book.genre}</Genre>
      <Rating>
        <StarContainer>{stars}</StarContainer>
        {book.rating.toFixed(1)}
      </Rating>
    </Card>
  );
};

export default BookCard;