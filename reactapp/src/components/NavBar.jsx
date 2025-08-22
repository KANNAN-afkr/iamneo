import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav data-testid="navbar">
      <h1>Gift Application</h1>
      <ul>
        <li>
          <Link to="/" className="nav-link" data-testid="home-link">Home</Link>
        </li>
        <li>
          <Link to="/getAllGifts" className="nav-link" data-testid="gift-details-link">Gift Details</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;