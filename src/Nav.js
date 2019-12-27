import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'


function Nav() {

  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to='/week/1/1'>
          <li>week 1 day 1</li>
        </Link>
        <Link style={navStyle} to='/week/1/2'>
          <li>week 1 day 2</li>
        </Link>
        <Link style={navStyle} to='/week/1/3'>
          <li>week 1 day 3</li>
        </Link>
        <Link style={navStyle} to='/week/2/1'>
          <li>week 2 day 1</li>
        </Link>
        <Link style={navStyle} to='/week/2/2'>
          <li>week 2 day 2</li>
        </Link>
        <Link style={navStyle} to='/week/2/3'>
          <li>week 2 day 3</li>
        </Link>

      </ul>
    </nav>
  );
}

export default Nav;
