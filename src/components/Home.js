import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksAction } from '../redux/actions';
import SearchBar from './SearchBar';
import BookCard from './BookCard';

const Home = () => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector(state => state);

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchBooksAction('novel'));
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredBooks = books?.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="search-header">
        <h2>Pencarian Buku Novel</h2>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="book-cards">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          filteredBooks.map(book => (
            <BookCard key={book.key} book={book} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
