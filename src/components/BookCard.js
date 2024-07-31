import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookToCollection } from '../redux/actions';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state);
  const coverUrl = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : 'https://via.placeholder.com/150';

  const handleAddToCollection = () => {
    if (user) {
      dispatch(addBookToCollection(book));
    } else {
      alert('Anda harus login terlebih dahulu!');
    }
  };

  return (
    <div className="card">
      <img src={coverUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author_name ? book.author_name.join(', ') : 'No author information available.'}</p>
      <button onClick={handleAddToCollection}>Tambahkan Buku</button>
    </div>
  );
};

export default BookCard;
