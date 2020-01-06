import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import exercises from "./Exercises";

function WeekComponent(props) {

  const navStyle = {
    color: 'black'
  };

  let weekNr = props.match.params.weekNr[0];
  let dayNr = props.match.params.dayNr[0];
  return (
    <div>
       <span>{exercises[weekNr][dayNr]}</span>
       <Link className="link-style" style={navStyle} to='/'>
          <div>Back to home</div>
        </Link>
    </div>
  );
}

export default WeekComponent;
