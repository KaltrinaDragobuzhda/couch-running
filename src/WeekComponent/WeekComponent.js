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
          totalSeconds: this.state.totalSeconds+1,
          stepIndex: this.state.stepIndex+1,
          action: this.state.action==="run"?"walk":"run"
        });
       }
       else {
        this.setState({
          seconds: this.state.seconds + 1,
          totalSeconds: this.state.totalSeconds+1
        });
       }
     }
    }, 1000);
  }
  
  render() {
    return <div className="week-component-container">
      <button className="start-button" onClick={this.start}>Start</button> 
      <span className="show-human-exercises">{exercises[this.state.weekNr][this.state.dayNr].human}</span>
      <div className="counting-seconds">{this.state.seconds}</div> 
      <div className="counting-seconds">{this.state.totalSeconds}</div> 
      <div className="state-action">{this.state.action}</div> 
      <Link className="link-style" style={this.navStyle} to='/'>
        <div>Back to home</div>
      </Link>
    </div>;
  }
}

export default Ujk;
