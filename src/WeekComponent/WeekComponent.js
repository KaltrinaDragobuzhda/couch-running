import React from 'react';
import './WeekComponent.css';
import { Link } from 'react-router-dom';
import exercises from "../Exercises";
import ExcerciseProgressSliderComponent from "../ExerciseProgressSliderComponent/ExerciseProgressSliderComponent";
import ProgressSliderDescription from "../ProgressSliderDescription";

class WeekComponent extends React.Component {

  constructor(props) {
    super(props);
    this.total = this.total.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.stopwatch = this.stopwatch.bind(this);
    this.intervalId = null;
    this.stepIndex = 0;
    this.weekNr = props.match.params.weekNr[0];
    this.dayNr = props.match.params.dayNr[0];
    this.state = {
      seconds: 0,
      totalSeconds: 0,
      totalLength: this.total(exercises[this.weekNr][this.dayNr].machine),
      action: "idle",
    }
  }

  total(machine){
    let totali = 0;
    for(let i = 0; i < machine.length; i++){
      totali += machine[i];
    }
    return totali; 
  }

  componentWillUnmount() {
    if(this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
  }

  start() {
    this.setState({
      action:this.oldAction?this.oldAction:"warmup"
    }, this.stopwatch);
  }

  pause(){
    if(this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.oldAction = this.state.action;
      this.setState({
        action:"paused",
        intervalId: null
      });
    }
  }

  toMins(seconds){
    return Math.floor(seconds/60) + ":" + (seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60);
  }

  stopwatch() {
    let intervalId = setInterval(() => {
      if(this.state.seconds === exercises[this.weekNr][this.dayNr].machine[this.stepIndex]) {
        if(this.stepIndex === exercises[this.weekNr][this.dayNr].machine.length - 1) {
          clearInterval(intervalId);
          this.setState({
            action:"ended"
          });
        }
        else {
          this.stepIndex++;
          this.setState({
            seconds: 1,
            totalSeconds: this.state.totalSeconds + 1,
            action: this.state.action==="run"?"walk":"run"
          });
        }
      }
      else {
        this.setState({
          seconds: this.state.seconds + 1,
          totalSeconds: this.state.totalSeconds + 1
        });
      }
    }, 1000);
    this.setState({
      intervalId
    });
  }

 

  render() {
    return <div className="week-component-container">
      {this.state.intervalId?
      <button className="pause-start-button" onClick={()=>{this.pause()}}>Pause</button>:
      <button className="pause-start-button" onClick={()=>{this.start()}}>Start</button> }
      <span className="show-human-exercises">{exercises[this.weekNr][this.dayNr].human}</span>
      <div className="counting-seconds">{this.toMins(this.state.seconds)}</div> 
      <div className="counting-seconds">{this.toMins(this.state.totalLength - this.state.totalSeconds)}</div> 
      <div className="state-action">{this.state.action}</div> 
      <ProgressSliderDescription exercise={exercises[this.weekNr][this.dayNr].machine} action = {} />
      <ExcerciseProgressSliderComponent currentSeconds={this.state.totalSeconds} exercise={exercises[this.weekNr][this.dayNr].machine} />
      
      <br/>
      <Link className="link-style" style={this.navStyle} to='/'>
        <div className="back-to-home">Back to home</div>
      </Link>
    </div>;
  }
}

export default WeekComponent;
