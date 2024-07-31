import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookCollection from './pages/BookCollection';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register'; // Pastikan komponen Register diimpor
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<BookCollection />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> {/* Tambahkan route ini */}
    </Routes>
  </div>
);

export default App;
