import React, { useState } from 'react';
import './ContactUsPage.css';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('All fields must be filled out');
    } else if (!validateEmail(form.email)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
      alert('Form submitted');
      setForm({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div className="outer-container">
      <div className="bplanet-container">
        <h1>Contact Us</h1>
      </div>
      <div className="contactus-container">
        <div className='cos'><h1>B.planet</h1></div>
        <h2>Contact Us</h2>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-input"
                style={{color:'gray'}}
                placeholder='e.g-pritam'
              />
            </label>
            <label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-input"
                placeholder='e.g- example@gmail.com'
              />
            </label>
            <label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="form-input"
                placeholder='e.g-I found your site informative.'
              ></textarea>
            </label>
            {error && <p className="contact-error-message">{error}</p>}
            <button type="submit">Submit</button>
          </form>
          <div className="stay-updated">
            <h2>Stay Updated</h2>
            <p>Need to get in touch with us?</p>
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.instagram.com">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
