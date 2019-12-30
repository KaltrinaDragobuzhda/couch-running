import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function WeekComponent(props) {

  const wStyle = {
    width: 110
  }

  const navStyle = {
    color: 'black'
  };

  return (
    <div style={wStyle}>
       Ju jeni te java  {props.match.params.weekNr[0]} dita {props.match.params.dayNr[0]}
       <Link className="link-style" style={navStyle} to='/'>
          <div>Back to home</div>
        </Link>
    </div>
  );
}

export default WeekComponent;
