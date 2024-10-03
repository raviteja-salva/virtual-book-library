import React from 'react';
import BookCard from '../BookCard/BookCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ListContainer, Grid, CardWrapper, NoBooks } from './BookList.style';

const BookList = ({ books }) => {
  return (
    <ListContainer>
      <AnimatePresence>
        {books.length > 0 ? (
          <Grid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {books.map((book, index) => (
              <CardWrapper
                key={book.id}
                initial={{ opacity: 0, rotateY: -30, translateY: 30 }}
                animate={{ opacity: 1, rotateY: 0, translateY: 0 }}
                exit={{ opacity: 0, rotateY: 30, translateY: -30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <BookCard book={book} />
              </CardWrapper>
            ))}
          </Grid>
        ) : (
          <NoBooks
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            No books found. Try adjusting your search.
          </NoBooks>
        )}
      </AnimatePresence>
    </ListContainer>
  );
};

export default BookList;