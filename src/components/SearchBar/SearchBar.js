import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SearchContainer, SearchIcon, Input } from './SearchBar.style';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <SearchContainer>
      <SearchIcon>
        <Search size={20} />
      </SearchIcon>
      <Input
        type="text"
        placeholder="Search by title, author, or genre..."
        value={query}
        onChange={handleChange}
      />
    </SearchContainer>
  );
};

export default SearchBar;