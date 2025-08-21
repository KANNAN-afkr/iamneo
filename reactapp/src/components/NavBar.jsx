import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <h1>Gift Application</h1>
      <ul>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/getAllGifts" className="nav-link">Gift Details</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;