import axios from 'axios';

const fetchBooks = (query) => axios.get(`https://openlibrary.org/search.json?q=${query}`);

export default fetchBooks;
