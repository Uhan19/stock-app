import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="navbar header">
      <Link to="/">
        <h3>Stock Market App</h3>
      </Link>
    </div>
  );
};
