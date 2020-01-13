import React from 'react';
import './WeekComponent.css';
import { Link } from 'react-router-dom';
import exercises from "../Exercises";

class WeekComponent extends React.Component {

  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.stopwatch = this.stopwatch.bind(this);
    this.intervalId = null;
    this.stepIndex = 0;
    this.weekNr = props.match.params.weekNr[0];
    this.dayNr = props.match.params.dayNr[0];
    this.state = {
      seconds: 0,
      totalSeconds: 0,
      action: "idle"
    }
  }

  componentWillUnmount() {
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  start() {
    this.setState({
      action:"warmup"
    }, this.stopwatch);
  }

  toMins(seconds){
    return Math.floor(seconds/60) + ":" + (seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60);
  }

  stopwatch() {
    this.intervalId = setInterval(() => {
      if(this.state.seconds === exercises[this.weekNr][this.dayNr].machine[this.stepIndex]) {
        if(this.state.stepIndex === exercises[this.weekNr][this.dayNr].machine.length - 1) {
          clearInterval(this.intervalId);
          this.setState({
            action:"ended"
          });
        }
        else {
          this.stepIndex++;
          this.setState({
            seconds: 1,
            totalSeconds: this.state.totalSeconds+1,
            action: this.state.action==="run"?"walk":"run"
          });
        }
      }
      else {
        this.setState({
          seconds: this.state.seconds + 1,
          totalSeconds: this.state.totalSeconds+1
        });
      }
    }, 1000);
  }
  
  render() {
    return <div className="week-component-container">
      <button className="start-button" onClick={this.start}>Start</button> 
      <span className="show-human-exercises">{exercises[this.weekNr][this.dayNr].human}</span>
      <div className="counting-seconds">{this.toMins(this.state.seconds)}</div> 
      <div className="counting-seconds">{this.toMins(this.state.totalSeconds)}</div> 
      <div className="state-action">{this.state.action}</div> 
      <Link className="link-style" style={this.navStyle} to='/'>
        <div>Back to home</div>
      </Link>
    </div>;
  }
}

export default WeekComponent;
