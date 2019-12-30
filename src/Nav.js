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
        <Link className="link-style" style={navStyle} to='/week/1/1'>
          <div>week 1 day 1</div>
        </Link>
        <Link className="link-style" style={navStyle} to='/week/1/2' >
          <div>week 1 day 2</div>
        </Link>
        <Link className="link-style" style={navStyle} to='/week/1/3'>
          <div>week 1 day 3</div>
        </Link>
        </div>
        <div className="link-style" className='week-container'>
        <Link className="link-style" style={navStyle} to='/week/2/1'>
          <div>week 2 day 1</div>
        </Link>
        <Link  className="link-style" style={navStyle} to='/week/2/2'>
          <div>week 2 day 2</div>
        </Link>
        <Link className="link-style" style={navStyle} to='/week/2/3'>
          <div>week 2 day 3</div>
        </Link>
        </div>
        <div className='week-container'>
        <Link className="link-style" style={navStyle} to='/week/3/1'>
          <div>week 3 day 1</div>
        </Link>
        <Link className="link-style" style={navStyle} to='/week/3/2'>
          <div>week 3 day 2</div>
        </Link>
        <Link className="link-style" style={navStyle} to='/week/3/3'>
          <div>week 3 day 3</div>
        </Link>
        </div>
        <div className='week-container'>
        <Link className="link-style" style={navStyle} to='/week/4/1'>
          <div>week 4 day 1</div>
        </Link>
        <Link className="link-style" style={navStyle} to='/week/4/2'>
          <div>week 4 day 2</div>
        </Link>
        <Link className="link-style" style={navStyle} to='/week/4/3'>
          <div>week 4 day 3</div>
        </Link>
        </div>
        <div className='week-container'>
        <Link className="link-style" style={navStyle} to='/week/5/1'>
          <div>week 5 day 1</div>
        </Link>
        <Link className="link-style" style={navStyle} to='/week/5/2'>
          <div>week 5 day 2</div>
        </Link>
        <Link className="link-style" style={navStyle} to='/week/5/3'>
          <div>week 5 day 3</div>
        </Link>
        </div>
        <div className='week-container'>
        <Link className="link-style" style={navStyle} to='/week/6/1'>
          <div>week 6 day 1</div>
        </Link>
        <Link className="link-style" style={navStyle} to='/week/6/2'>
          <div>week 6 day 2</div>
        </Link>
        <Link className="link-style" style={navStyle} to='/week/6/3'>
          <div>week 6 day 3</div>
        </Link>
        </div>
        <div className='week-container'>
        <Link className="link-style" style={navStyle} to='/week/7/1'>
          <div>week 7 day 1</div>
        </Link>
        <Link className="link-style" style={navStyle} to='/week/7/2'>
          <div>week 7 day 2</div>
        </Link>
        <Link className="link-style" style={navStyle} to='/week/7/3'>
          <div>week 7 day 3</div>
        </Link>
        </div>
        <div className='week-container'>
        <Link className="link-style" style={navStyle} to='/week/8/1'>
          <div>week 8 day 1</div>
        </Link>
        <Link className="link-style" style={navStyle} to='/week/8/2'>
          <div>week 8 day 2</div>
        </Link>
        <Link className="link-style" style={navStyle} to='/week/8/3'>
          <div>week 8 day 3</div>
        </Link>
        </div>
        <Link className="link-style" style={navStyle} to='/'>
          <div>Back to home</div>
        </Link>

      </ul>
    </nav>
  );
}

export default Nav;
