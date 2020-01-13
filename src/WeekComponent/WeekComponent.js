import React from 'react';
import './WeekComponent.css';
import { Link } from 'react-router-dom';
import exercises from "../Exercises";

class Ujk extends React.Component {

  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.stopwatch = this.stopwatch.bind(this);
    this.state = {
      weekNr: props.match.params.weekNr[0],
      dayNr: props.match.params.dayNr[0],
      seconds: 0,
      totalSeconds: 0,
      action: "idle",
      stepIndex: 0
    }
  }

  start() {
    this.setState({
      action:"warmup"
    }, this.stopwatch);
  }

  stopwatch() {
   this.intervalId = setInterval(() => {
     if(this.state.stepIndex === exercises[this.state.weekNr][this.state.dayNr].machine.length) {
      clearInterval(this.intervalId);
      this.setState({
        action:"ended"
      });
     }
     else {
      if(this.state.seconds === exercises[this.state.weekNr][this.state.dayNr].machine[this.state.stepIndex]) {
        this.setState({
          seconds: 1,
          stepIndex: this.state.stepIndex+1,
          action: this.state.action==="run"?"walk":"run"
        });
       }
       else {
        this.setState({
          seconds: this.state.seconds + 1
        });
       }
     }
    }, 1000);
  }
  
  render() {
    return <div>
      <button onClick={this.start}>Start</button> <br />
      <span>{exercises[this.state.weekNr][this.state.dayNr].human}</span><br />
      <div>{this.state.seconds}</div> <br />
      <div>{this.state.action}</div> <br />
      <Link className="link-style" style={this.navStyle} to='/'>
        <div>Back to home</div>
      </Link>
    </div>;
  }
}

export default Ujk;
