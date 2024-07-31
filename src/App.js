import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookCollection from './pages/BookCollection';
import Contact from './pages/Contact';
import Login from './pages/Login';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<BookCollection />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </div>
);

export default App;
