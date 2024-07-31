import React from 'react';

const SearchBar = ({ onSearch }) => (
  <div className="search-bar">
    <input type="text" placeholder="Cari Buku" onChange={onSearch} />
  </div>
);

export default SearchBar;
