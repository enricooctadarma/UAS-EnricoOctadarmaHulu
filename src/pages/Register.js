import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      alert('Password tidak cocok!');
      return;
    }

    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(setUser(user));
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Registrasi</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="repeat-password">Ulangi Password</label>
            <input
              type="password"
              id="repeat-password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Registrasi</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
