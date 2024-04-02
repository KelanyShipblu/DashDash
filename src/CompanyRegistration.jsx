// src/components/CompanyRegistration.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component


const CompanyRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, such as sending the data to the server
    console.log(formData);
  };

  return (
    <div>
      <Link to="/"><p className="logo">DashDash</p></Link>

      <h3>Company Registration</h3>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>

      
      </form>
      <p> &nbsp;</p>

      <p>Do you have an account? <Link to="/CompanyLogin">Login</Link></p>
      
    </div>
  );
};

export default CompanyRegistration;
