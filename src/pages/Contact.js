import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log({ name, email, feedback });
    // Clear the form
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <div className="contact-container">
      <h1>Kontak Kami</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Informasi Kontak</h2>
          <p>Alamat: Politeknik Wilmar Bisnis Indonesia</p>
          <p>Telepon: 085212458071</p>
          <p>Email: enrico.octadarma.hulu@wbi.ac.id</p>
        </div>
        <div className="contact-form">
          <h2>Formulir Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="feedback">Feedback:</label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </div>
            <button type="submit">Kirim</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
