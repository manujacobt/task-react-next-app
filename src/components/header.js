import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './header.css';


const Header = () => {
    let navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <header>
      <h1>Student and Teacher Management</h1>
      <nav>
        <ul>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/teachers">Teachers</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
