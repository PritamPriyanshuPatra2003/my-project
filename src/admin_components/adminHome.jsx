import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminHome.css';

const AdminHome = () => {
  const navigate = useNavigate();
  const [heading, setHeading] = useState('Heading');
  const [isEditing, setIsEditing] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, title: 'Tree 1', imgSrc: '/path/to/image1.png' },
    { id: 2, title: 'Plant 1', imgSrc: '/path/to/image2.png' },
    { id: 3, title: 'Tree 1', imgSrc: '/path/to/image3.png' },
    { id: 4, title: 'Plant 2', imgSrc: '/path/to/image4.png' },
    { id: 5, title: 'Tree 1', imgSrc: '/path/to/image5.png' },
    { id: 6, title: 'Tree 1', imgSrc: '/path/to/image6.png' },
    { id: 7, title: 'Tree 1', imgSrc: '/path/to/image7.png' }
  ]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setHeading(event.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleAddProduct = () => {
    const newProduct = { id: products.length + 1, title: 'New Product', imgSrc: '' };
    setProducts([...products, newProduct]);
  };

  const handleImageChange = (e, id) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProducts(products.map(product => (
        product.id === id ? { ...product, imgSrc: reader.result } : product
      )));
      navigate(`/admin/description/${id}`);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleTitleChange = (e, id) => {
    setProducts(products.map(product => (
      product.id === id ? { ...product, title: e.target.value } : product
    )));
  };

  return (
    <div className="admin-home">
      <header className="home-page-heading">
        <h1>Home Page</h1>
      </header>

      <div className="admin-content">
        <div className="top-section">
          <header className="admin-header">
            <div className="header-left">
              <div className="header-box" onClick={() => navigate('/admin/home')}>
                <span style={{ border: '1px ', borderRadius: '0px', fontSize: '20px', fontWeight: 'bold' }}>B.planet</span>
              </div>
            </div>
            <div className="header-right">
              <div className="header-box1" onClick={() => navigate('/admin/contact')}>
                <span>Contact us</span>
              </div>
              <div className="header-box" onClick={() => navigate('/admin/profile')}>
                <span>profile</span>
              </div>
            </div>
          </header>
          <div>
          <img src="/heroimage2.png" alt="Hero" className="hero-img2" />
          <img src="/heroimage1.png" alt="Hero" className="hero-img1" /></div>
          <div className="heading-box">
            {isEditing ? (
              <input
                type="text"
                value={heading}
                 onChange={handleInputChange}
                 onBlur={handleInputBlur}
                 autoFocus
                className="heading-input"
              />
            ) : (
              <h1 onClick={handleEditClick}>{heading}</h1>
            )}
          </div>
        </div>
        <div className="bottom-section">
          <h5>Featured Product</h5>
          <div className="product-grid12">
            {products.map(product => (
              <div key={product.id} className="product-card34">
                <input
                  type="file"
                  onChange={(e) => handleImageChange(e, product.id)}
                  style={{ display: 'none' }}
                  id={`file-input-${product.id}`}
                />
                <label htmlFor={`file-input-${product.id}`}>
                  {product.imgSrc ? (
                    <img src={product.imgSrc} alt={product.title} className="product-image" />
                  ) : (
                    <div className="image-placeholder">Image</div>
                  )}
                </label>
                <input
                  type="text"
                  value={product.title}
                  onChange={(e) => handleTitleChange(e, product.id)}
                  className="product-title56"
                />
              </div>
            ))}
            <div className="product-card add-new" onClick={handleAddProduct}>
              <span className="add-icon">+</span>
            </div>
          </div>
          <div className="pagination">
            <button className="pagination-button">Previous</button>
            <span className="page-number">1</span>
            <button className="pagination-button">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
