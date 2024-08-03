// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const adProductDescription = ({ products, setProducts }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = products.find(p => p.id === parseInt(id));
//   const [description, setDescription] = useState(product.description || '');

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleSave = () => {
//     setProducts(products.map(p => 
//       p.id === product.id ? { ...p, description } : p
//     ));
//     navigate('/admin/home');
//   };

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <img src={product.imgSrc} alt={product.title} style={{ width: '200px' }} />
//       <textarea 
//         value={description} 
//         onChange={handleDescriptionChange} 
//         placeholder="Enter product description here" 
//         style={{ width: '100%', height: '200px' }}
//       />
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default adProductDescription;
// adProductDescription.js
// import React from 'react';
// import { useParams } from 'react-router-dom';

// const AdProductDescription = ({ products }) => {
//   const { id } = useParams();
//   const product = products.find(p => p.id === parseInt(id));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <h2>{product.title}</h2>
//       <p>{product.description}</p>
//       <img src={product.imgSrc} alt={product.title} />
//     </div>
//   );
// };

// export default AdProductDescription;

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './adProductDescription.css';

// const AdProductDescription = ({ products }) => {
//   const { id } = useParams();
//   const productId = parseInt(id);
//   const product = products.find(p => p.id === productId);

//   if (!product) {
//     return <div className="product-not-found">Product not found</div>;
//   }

//   console.log('Product ID:', productId);  // Debugging line
//   console.log('Product:', product);  // Debugging line

//   return (
//     <div className="product-description-container">
//       <h2 className="product-title">{product.title}</h2>
//       <p className="product-description">{product.description}</p>
//       <img src={product.imgSrc} alt={product.title} className="product-image" />
//     </div>
//   );
// };

// export default AdProductDescription;
