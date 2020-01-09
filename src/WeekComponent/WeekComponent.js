import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import exercises from "../Exercises";
import './WeekComponent.css';

class Ujk extends React.Component {

  constructor(props) {
    super(props);
    this.stopwatch = this.stopwatch.bind(this);
    this.state = {
      weekNr: props.match.params.weekNr[0],
      dayNr: props.match.params.dayNr[0],
      seconds: 0,
      totalSeconds: 0,
      action: "warmup",
      stepIndex: 0
    }
  }

  stopwatch() {
   setInterval(() => {
     if(this.state.stepIndex === exercises[this.state.weekNr][this.state.dayNr].machine.length) {
      alert("we should be done here");
     }
     else {
      if(this.state.seconds === exercises[this.state.weekNr][this.state.dayNr].machine[this.state.stepIndex]) {
        this.setState({
          seconds: 1,
          stepIndex: this.state.stepIndex+1,
          totalSeconds: this.state.totalSeconds + 1,
          action: this.state.action==="run"?"walk":"run"
        });
       }
       else {
        this.setState({
          seconds: this.state.seconds + 1,
          totalSeconds: this.state.totalSeconds + 1
        });
       }
     }
    }, 1000);
  }
  
  render() {
    return <div className="week-component-container-class">
      <button className="start-button" onClick={this.stopwatch}>Start</button> 
      <span className="show-human-exercises-class">{exercises[this.state.weekNr][this.state.dayNr].human}</span>
      <div className="counting-seconds-class">{this.state.seconds}</div> 
      <div className="counting-seconds-class">{this.state.totalSeconds}</div> 
      <div className="state-action-class">{this.state.action}</div> 
      <Link className="link-style" style={this.navStyle} to='/'>
        <div>Back to home</div>
      </Link>
    </div>;
  }
}

export default Ujk;
