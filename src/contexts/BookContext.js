import React, { createContext, useState, useContext } from 'react';
import books from '../data/Books.json';

const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

export const BookProvider = ({ children }) => {

  const [myLibrary, setMyLibrary] = useState([]);

  const addToLibrary = (book) => {
    setMyLibrary((prevLibrary) => [...prevLibrary, book]);
  };

  const removeFromLibrary = (bookId) => {
    setMyLibrary((prevLibrary) => prevLibrary.filter(book => book.id !== bookId));
  };

  return (
    <BookContext.Provider value={{ books, myLibrary, addToLibrary, removeFromLibrary }}>
      {children}
    </BookContext.Provider>
  );
};
