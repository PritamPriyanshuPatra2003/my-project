import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      localStorage.setItem('user', JSON.stringify(formData));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!user) {
    return <div style={{ justifyContent: 'center' }}>User not found</div>;
  }

  return (
    <div className="prp">
      <h2>Profile/About us page</h2>
      <div className="bplanet-profile-container">
        <h1>B.Planet</h1>
        <Link to="/contactus" className="contact-us9">Contact Us</Link>
        <div className="bplanet-profile-card">
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-male-avatar-image-in-the-circle-image_2908803.jpg" alt="User" className="bplanet-profile-image" />
          <div>
            <button onClick={handleEdit} className="bplanet-button1">{isEditing ? 'Save' : 'Edit'}</button>
          </div>
          <div className="bplanet-profile-detail">
            <label>Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bplanet-text-area"
              />
            ) : (
              <div className="bplanet-text-area">{formData.name}</div>
            )}
          </div>
          <div className="bplanet-profile-detail">
            <label>Role</label>
            {isEditing ? (
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="bplanet-text-area"
              />
            ) : (
              <div className="bplanet-text-area">{formData.role}</div>
            )}
          </div>
          <div className="bplanet-profile-detail">
            <label>Email</label>
            {isEditing ? (
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bplanet-text-area"
              />
            ) : (
              <div className="bplanet-text-area">{formData.email}</div>
            )}
          </div>
          <div className="bplanet-profile-detail">
            <label>Password</label>
            {isEditing ? (
              <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="bplanet-text-area"
              />
            ) : (
              <div className="bplanet-text-area">{formData.password}</div>
            )}
          </div>
          <div className="bplanet-profile-detail">
            <label>Phone Number</label>
            {isEditing ? (
              <input
                type="text"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                className="bplanet-text-area"
              />
            ) : (
              <div className="bplanet-text-area">{formData.phonenumber}</div>
            )}
          </div>
          <div className="bplanet-profile-detail">
            <label>Address</label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="bplanet-text-area"
              />
            ) : (
              <div className="bplanet-text-area">{formData.address}</div>
            )}
          </div>
          <div className="bplanet-profile-detail">
            <label>State</label>
            {isEditing ? (
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="bplanet-text-area"
              />
            ) : (
              <div className="bplanet-text-area">{formData.state}</div>
            )}
          </div>
          <div className="bplanet-profile-detail">
            <label>Zip Code</label>
            {isEditing ? (
              <input
                type="text"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                className="bplanet-text-area"
              />
            ) : (
              <div className="bplanet-text-area">{formData.zipcode}</div>
            )}
          </div>
          <button onClick={handleLogout} className="bplanet-button">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
