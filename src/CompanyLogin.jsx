import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const CompanyLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle company login submission
    console.log('Company Login Submitted:', formData);
  };

  return (
    <div>
      <Link to="/"><p className="logo">DashDash</p></Link>

      <h3>Company Login</h3>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <p> &nbsp;</p>

      <p>Don't have an account? <Link to="/CompanyRegistration">Register</Link></p>
    </div>
  );
};

export default CompanyLogin;
