import React, { useState } from 'react';
import { useBookContext } from '../../contexts/BookContext';
import BookList from '../../components/BookList/BookList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { PageContainer, Title } from './HomePage.style';

const HomePage = () => {
  const { books } = useBookContext();
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (query) => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.genre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <PageContainer>
      <Title
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Virtual Book Library
        </Title>
      <SearchBar onSearch={handleSearch} />
      <BookList books={filteredBooks} />
    </PageContainer>
  );
};

export default HomePage;
