import {
  FETCH_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  ADD_BOOK_TO_COLLECTION,
  REMOVE_BOOK_FROM_COLLECTION,
  SET_USER,
  REMOVE_USER,
} from './actionTypes';
import axios from 'axios';

export const fetchBooksAction = (query) => async (dispatch) => {
  dispatch({ type: FETCH_BOOKS });

  try {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: response.data.docs });
  } catch (error) {
    dispatch({ type: FETCH_BOOKS_FAILURE, payload: error.message });
  }
};

export const addBookToCollection = (book) => ({
  type: ADD_BOOK_TO_COLLECTION,
  payload: book,
});

export const removeBookFromCollection = (bookId) => ({
  type: REMOVE_BOOK_FROM_COLLECTION,
  payload: bookId,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
