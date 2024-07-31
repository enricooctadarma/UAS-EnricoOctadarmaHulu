import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../redux/actions';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleLogout = () => {
    dispatch(removeUser());
  };

  return (
    <nav>
      <div className="nav-links">
        <Link to="/">Beranda</Link>
        <Link to="/collection">Koleksi Buku</Link>
        <Link to="/contact">Kontak</Link>
      </div>
      <div className="auth-links">
        {user ? (
          <>
            <span>Welcome, {user.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
