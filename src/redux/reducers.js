import {
  FETCH_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  ADD_BOOK_TO_COLLECTION,
  REMOVE_BOOK_FROM_COLLECTION,
  SET_USER,
  REMOVE_USER,
} from './actionTypes';

const initialState = {
  books: [],
  loading: false,
  error: null,
  collection: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_BOOK_TO_COLLECTION:
      return {
        ...state,
        collection: [...state.collection, action.payload],
      };
    case REMOVE_BOOK_FROM_COLLECTION:
      return {
        ...state,
        collection: state.collection.filter(book => book.key !== action.payload),
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
