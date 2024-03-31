// IndexPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => {
  return (
    <div>
      <h2>Welcome to Registration Portal</h2>
      <p>Please select your registration type:</p> {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}

      <div>
        <Link to="/company-registration">
          <button className="company-button">Register as Company</button>
        </Link>
      </div>{"\n"}{"\n"}
      <div>
        <Link to="/user-registration">
          <button className="user-button">Register as User</button>
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
