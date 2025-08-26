import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <h2>Welcome to the Gift Application</h2>
      <p>Join our community of skilled gift providers and bring joy to every occasion!</p>
      <Link to="/apply" data-testid="become-przovider-link">Become a Gift Provider</Link>
    </main>
  );
};

export default Home;