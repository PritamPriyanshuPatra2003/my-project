import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const loggedInUser = localStorage.getItem('user');

  return (
    <div className="header-wrapper">
      <div className="home-page-container">
        <h1 className="home-page-title">Home Page</h1>
        <div className="header-container">
          <div className="logo-container">
            <h1 className="logo">B.Planet</h1>
            <div className="hero-container">
              <div className="plant-quote">
                <p className='int'>'As interesting</p>
                <p className='plant'>as a plant'</p>
              </div>
              <img src="/heroimage2.png" alt="Hero" className="hero-image2" />
              <img src="/heroimage1.png" alt="Hero" className="hero-image1" />
            </div>
            <nav className="navv">
              <Link to="/contactus" className="contact-us">Contact Us</Link>
              {loggedInUser ? (
                <Link to="/profile" className='lo-gin'>Profile</Link>
              ) : (
                <Link to="/login" className='lo-gin'>Login</Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;