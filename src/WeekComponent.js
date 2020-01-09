import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import exercises from "./Exercises";

class Ujk extends React.Component {

  constructor(props) {
    super(props);
    this.stopwatch = this.stopwatch.bind(this);
    this.state = {
      weekNr: props.match.params.weekNr[0],
      dayNr: props.match.params.dayNr[0],
      seconds: 0
    }
  }

  stopwatch() {
   var idVar = setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1
      });
      if (this.state.seconds === 2) {
        this.seconds = 0;
        clearInterval(idVar)
      }
    }, 1000);
  }
  
  render() {
    return <div>
      <button onClick={this.stopwatch}>Start</button> <br />
      <span>{exercises[this.state.weekNr][this.state.dayNr]}</span><br />
      <div>{this.state.seconds}</div> <br />
      <Link className="link-style" style={this.navStyle} to='/'>
        <div>Back to home</div>
      </Link>
    </div>;
  }
}

export default Ujk;
