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

  function shoot() {
    console.log('listened');
  }
  
  function stopwatch(){
   let id = setInterval(() => {
     console.log("hello world");
   },1000);
  }
  return (
    <div>
      <button onClick={stopwatch}>Take the shot!</button>
       <span>{exercises[weekNr][dayNr]}</span>
       <Link className="link-style" style={navStyle} to='/'>
          <div>Back to home</div>
        </Link>
    </div>
  );
}

export default WeekComponent;
