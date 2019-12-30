import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'


function Nav() {

  const navStyle = {
    color: 'balck'
  };

  return (
    <nav>
      <ul className="nav-links">
        <div className='week-container'>
        <Link style={navStyle} to='/week/1/1'>
          <li>week 1 day 1</li>
        </Link>
        <Link style={navStyle} to='/week/1/2'>
          <li>week 1 day 2</li>
        </Link>
        <Link style={navStyle} to='/week/1/3'>
          <li>week 1 day 3</li>
        </Link>
        </div>
        <div className='week-container'>
        <Link style={navStyle} to='/week/2/1'>
          <li>week 2 day 1</li>
        </Link>
        <Link style={navStyle} to='/week/2/2'>
          <li>week 2 day 2</li>
        </Link>
        <Link style={navStyle} to='/week/2/3'>
          <li>week 2 day 3</li>
        </Link>
        </div>
        <div className='week-container'>
        <Link style={navStyle} to='/week/3/1'>
          <li>week 3 day 1</li>
        </Link>
        <Link style={navStyle} to='/week/3/2'>
          <li>week 3 day 2</li>
        </Link>
        <Link style={navStyle} to='/week/3/3'>
          <li>week 3 day 3</li>
        </Link>
        </div>
        <div className='week-container'>
        <Link style={navStyle} to='/week/4/1'>
          <li>week 4 day 1</li>
        </Link>
        <Link style={navStyle} to='/week/4/2'>
          <li>week 4 day 2</li>
        </Link>
        <Link style={navStyle} to='/week/4/3'>
          <li>week 4 day 3</li>
        </Link>
        </div>
        <div className='week-container'>
        <Link style={navStyle} to='/week/5/1'>
          <li>week 5 day 1</li>
        </Link>
        <Link style={navStyle} to='/week/5/2'>
          <li>week 5 day 2</li>
        </Link>
        <Link style={navStyle} to='/week/5/3'>
          <li>week 5 day 3</li>
        </Link>
        </div>
        <div className='week-container'>
        <Link style={navStyle} to='/week/6/1'>
          <li>week 6 day 1</li>
        </Link>
        <Link style={navStyle} to='/week/6/2'>
          <li>week 6 day 2</li>
        </Link>
        <Link style={navStyle} to='/week/6/3'>
          <li>week 6 day 3</li>
        </Link>
        </div>
        <div className='week-container'>
        <Link style={navStyle} to='/week/7/1'>
          <li>week 7 day 1</li>
        </Link>
        <Link style={navStyle} to='/week/7/2'>
          <li>week 7 day 2</li>
        </Link>
        <Link style={navStyle} to='/week/7/3'>
          <li>week 7 day 3</li>
        </Link>
        </div>
        <div className='week-container'>
        <Link style={navStyle} to='/week/8/1'>
          <li>week 8 day 1</li>
        </Link>
        <Link style={navStyle} to='/week/8/2'>
          <li>week 8 day 2</li>
        </Link>
        <Link style={navStyle} to='/week/8/3'>
          <li>week 8 day 3</li>
        </Link>
        </div>
        <Link style={navStyle} to='/'>
          <li>Back to home</li>
        </Link>

      </ul>
    </nav>
  );
}

export default Nav;
