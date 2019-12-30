import React from 'react';
import './App.css';

function Week(props) {

  const wStyle = {
    width: 110
  }

  return (
    <div style={wStyle}>
       Ju jeni te java  {props.match.params.weekNr[0]} dita {props.match.params.dayNr[0]}
    </div>
  );
}

export default Week;
