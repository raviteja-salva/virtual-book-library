import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { BookProvider } from './contexts/BookContext';
import HomePage from './pages/HomePage/HomePage';
import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage';
import MyLibraryPage from './pages/MyLibraryPage/MyLibraryPage';
import Navbar from './components/Navbar/Navbar';

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #f0f4f8;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

function App() {
  return (
    <Router>
      <BookProvider>
        <AppContainer>
          <Navbar />
          <ContentContainer>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/book/:id" element={<BookDetailsPage />} />
              <Route path="/my-library" element={<MyLibraryPage />} />
            </Routes>
          </ContentContainer>
        </AppContainer>
      </BookProvider>
    </Router>
  );
}

export default App;
