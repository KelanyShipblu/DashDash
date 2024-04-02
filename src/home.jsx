// home.js

import React from 'react';
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <div>
      <p className="logo">DashDash</p>
      <p> &nbsp;</p>
      <h3>Welcome to Registration Portal</h3>
      <p> &nbsp;</p><p> &nbsp;</p>
      <p>Please select your registration type:</p> 

      <div>
        <Link to="/CompanyRegistration">
          <button className="company-button">Register as Company</button>
        </Link>
      </div>
      <div>
        <Link to="/AgentRegistration">
          <button className="user-button">Register as Agent</button>
        </Link>
      </div>
      
    </div>
  );
};

export default home;
