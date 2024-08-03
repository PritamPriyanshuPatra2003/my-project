
import React from 'react';
import { Link } from 'react-router-dom';
import './productcard.css';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <Link to={`/product/${product.id}`}>
    <img src={product.image} alt={product.title} className="product-image" />
    <div className="product-info">
      <h3 className="product-title">{product.title}</h3>
    </div>
    </Link>
  </div>
);

export default ProductCard;
