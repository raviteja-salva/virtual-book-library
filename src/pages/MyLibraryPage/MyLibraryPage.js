import React from 'react';
import { useBookContext } from '../../contexts/BookContext';
import BookList from '../../components/BookList/BookList';
import { motion, AnimatePresence } from 'framer-motion';
import { PageContainer, ContentWrapper, Title, EmptyMessage } from './MyLibraryPage.style';

const MyLibraryPage = () => {
  const { myLibrary, removeFromLibrary } = useBookContext();

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContentWrapper>
        <Title
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          My Library
        </Title>
        <AnimatePresence mode="wait">
          {myLibrary.length > 0 ? (
            <motion.div
              key="booklist"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <BookList books={myLibrary} onRemove={removeFromLibrary} />
            </motion.div>
          ) : (
            <EmptyMessage
              key="empty-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              Your library is empty. Add some books from the home page!
            </EmptyMessage>
          )}
        </AnimatePresence>
      </ContentWrapper>
    </PageContainer>
  );
};

export default MyLibraryPage;