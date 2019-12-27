import React from 'react';
import './App.css';

function Week(props) {
  return (
    <div>
      Ju jeni te java {props.match.params.weekNr} dita {props.match.params.dayNr}
    </div>
  );
}

export default Week;
