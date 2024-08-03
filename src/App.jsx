import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage';
import LoginPage from './components/LoginPage'; 
import FeaturedProducts from './components/featuredproducts';
import ProductDescription from './components/ProductDescription';
import ContactUs from './components/ContactUsPage';
import ProfilePage from './components/ProfilePage';
import AdminHome from './admin_components/adminHome';
import AdminContact from './admin_components/AdminContact';
import AdProfilePage from './admin_components/AdminPro';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="/" element={<FeaturedProducts/>} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/contact" element={<AdminContact />} />
          <Route path="/admin/profile" element={<AdProfilePage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
