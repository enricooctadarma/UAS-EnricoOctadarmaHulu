import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetail = () => {
  const { id } = useParams();
  const books = useSelector(state => state.books);
  const book = books.find(book => book.id === id);

  if (!book) return <div>Book not found</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.coverImage} alt={book.title} />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Content:</strong> {book.content}</p> {/* Menampilkan isi buku */}
    </div>
  );
};

export default BookDetail;
