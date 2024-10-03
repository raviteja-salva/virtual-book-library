import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBookContext } from '../../contexts/BookContext';
import { InfoValue, InfoItem, InfoLabel, Description, Button, BookDetailsWrapper, BookContent, Title, InfoGrid } from './BookDetailsPage.style';

const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, addToLibrary, myLibrary } = useBookContext();

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  const isInLibrary = myLibrary.some((b) => b.id === book.id);

  const handleAddToLibrary = () => {
    addToLibrary(book);
    navigate('/my-library');
  };

  return (
    <BookDetailsWrapper>
      <BookContent>
        <Title>{book.title}</Title>
        <InfoGrid>
          <InfoItem>
            <InfoLabel>Author</InfoLabel>
            <InfoValue>{book.author}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Genre</InfoLabel>
            <InfoValue>{book.genre}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Rating</InfoLabel>
            <InfoValue>{book.rating.toFixed(1)} / 5</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Publication Year</InfoLabel>
            <InfoValue>{book.publication_year}</InfoValue>
          </InfoItem>
        </InfoGrid>
        <Description>{book.description}</Description>
        {!isInLibrary && (
          <Button onClick={handleAddToLibrary}>
            Add to My Library
          </Button>
        )}
      </BookContent>
    </BookDetailsWrapper>
  );
};

export default BookDetailsPage;