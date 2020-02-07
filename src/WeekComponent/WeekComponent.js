import React from 'react';
import './WeekComponent.css';
import { Link } from 'react-router-dom';
import exercises from '../Exercises';
import {
  setExerciseInProgress,
  getExerciseInProgress,
  setExerciseAsComplete
}
  from '../exerciseStorageService';
import ExcerciseProgressSliderComponent
  from '../ExerciseProgressSliderComponent/ExerciseProgressSliderComponent';
import ProgressSliderDescription from '../ProgressSliderDescription';
class WeekComponent extends React.Component {
  constructor (props) {
    super(props);
    this.weekNr = props.match.params.weekNr;
    this.dayNr = props.match.params.dayNr;
    this.element = props.match.params.element;
    if (exercises[this.weekNr] && exercises[this.weekNr][this.dayNr]) {
      this.getTotalExerciseTime = this.getTotalExerciseTime.bind(this);
      this.start = this.start.bind(this);
      this.pause = this.pause.bind(this);
      this.getStep = this.getStep.bind(this);
      this.startExercise = this.startExercise.bind(this);
      this.intervalId = null;
      const exerciseData = getExerciseInProgress(this.weekNr, this.dayNr);
      const currentExercisePosition = exerciseData ? exerciseData[2] : 0;
      this.intervalIndex = this.calculateIntervalIndex(
        exercises[this.weekNr][this.dayNr].machine, currentExercisePosition
      );
      const currentIntervalPosition = this.getIntervalSeconds(
        exercises[this.weekNr][this.dayNr].machine, currentExercisePosition, this.intervalIndex
      );
      this.state = {
        totalElapsedTime: currentExercisePosition,
        intervalElapsedTime: currentIntervalPosition,
        action: 'idle',
        badRequest: false
      };
    } else {
      this.state = {
        badRequest: true
      };
    }
  }

  getTotalExerciseTime (machine) {
    let total = 0;
    for (let i = 0; i < machine.length; i++) {
      total += machine[i];
    }
    return total;
  }

  componentWillUnmount () {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
  }

  start () {
    this.setState({
      action: this.getStep(this.intervalIndex)
    }, this.startExercise);
  }

  calculateIntervalIndex (arr, num) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
      x += arr[i];
      if (x >= num) {
        return i;
      }
    }
  }

  getIntervalSeconds (arr, num, intervalIndex) {
    let x = 0;
    for (let i = 0; i < intervalIndex; i++) {
      x += arr[i];
    }
    return num - x;
  }

  getStep (intervalIndex) {
    if (intervalIndex === 0) {
      return 'warmup';
    }
    if (intervalIndex % 2 === 1) {
      return 'run';
    }
    return 'walk';
  };

  pause () {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.oldAction = this.state.action;
      this.setState({
        action: 'paused',
        intervalId: null,
        weekNr: this.weekNr,
        dayNr: this.dayNr
      });
      setExerciseInProgress(this.weekNr, this.dayNr, this.state.totalElapsedTime);
    }
  }

  convertMinutestoSeconds (seconds) {
    return Math.floor(seconds / 60) + ':' + (seconds % 60 < 10 ? '0' + seconds % 60 : seconds % 60);
  }

  startExercise () {
    const intervalId = setInterval(() => {
      if (this.state.intervalElapsedTime === exercises[this.weekNr][this.dayNr].machine[this.intervalIndex]) {
        if (this.intervalIndex === exercises[this.weekNr][this.dayNr].machine.length - 1) {
          clearInterval(intervalId);
          this.setState({
            action: 'ended'
          });
          setExerciseAsComplete(this.weekNr, this.dayNr);
        } else {
          this.intervalIndex++;
          this.setState({
            totalElapsedTime: this.state.totalElapsedTime + 1,
            intervalElapsedTime: 1,
            action: this.state.action === 'run' ? 'walk' : 'run'
          });
        }
      } else {
        this.setState({
          totalElapsedTime: this.state.totalElapsedTime + 1,
          intervalElapsedTime: this.state.intervalElapsedTime + 1
        });
      }
    }, 1000);
    this.setState({
      intervalId
    });
  }

  render () {
    if (!this.state.badRequest) {
      return <div className="week-component-container">
        {this.state.intervalId
          ? <button className="pause-start-button" onClick={() => { this.pause(); }}>Pause</button>
          : <button className="pause-start-button" onClick={() => { this.start(); }}>Start</button>}
        <span className="show-human-exercises">{exercises[this.weekNr][this.dayNr].human}</span>
        <div className="counting-seconds">{this.convertMinutestoSeconds(this.state.intervalElapsedTime)}</div>
        <div className='counting-seconds'>{this.convertMinutestoSeconds(this.state.totalElapsedTime)}</div>
        <div className="counting-seconds">
          {
            this.convertMinutestoSeconds(
              this.getTotalExerciseTime(exercises[this.weekNr][this.dayNr].machine) - this.state.totalElapsedTime
            )
          }
        </div>
        <div className="state-action">{this.state.action}</div>
        <ProgressSliderDescription exercise={exercises[this.weekNr][this.dayNr].machine} />
        <ExcerciseProgressSliderComponent currentPosition={this.state.totalElapsedTime}
          currentSeconds={this.state.totalElapsedTime}
          exercise={exercises[this.weekNr][this.dayNr].machine} />
        <br />
        <Link className="link-style" style={this.navStyle} to='/'>
          <div className="back-to-home">Back to home</div>
        </Link>
      </div>;
    } else {
      return <div>Hello World</div>;
    }
  }
}
export default WeekComponent;
