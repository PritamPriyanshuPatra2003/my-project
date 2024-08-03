
import React from 'react';
import './homepage.css';
import Header from './header';
import FeaturedProducts from './featuredproducts';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;