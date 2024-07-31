import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBookFromCollection } from '../redux/actions';
import './BookCollection.css';

const BookCollection = () => {
  const dispatch = useDispatch();
  const { collection } = useSelector(state => state);

  const handleRemoveFromCollection = (bookId) => {
    dispatch(removeBookFromCollection(bookId));
  };

  return (
    <div>
      <div className="collection-header">
        <h1>Koleksi Buku</h1>
      </div>
      <div className="book-cards">
        {collection.map(book => (
          <div key={book.key} className="card">
            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author_name ? book.author_name.join(', ') : 'No author information available.'}</p>
            <button onClick={() => handleRemoveFromCollection(book.key)}>Kembalikan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCollection;
