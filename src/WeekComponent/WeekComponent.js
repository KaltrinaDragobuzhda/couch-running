import React from 'react';
import './WeekComponent.css';
import exercises from '../Exercises';
import {
  setExerciseInProgress,
  getExerciseInProgress,
  setExerciseAsComplete,
  resetExercise
}
  from '../exerciseStorageService';
import ExcerciseProgressSliderComponent
  from '../ExerciseProgressSliderComponent/ExerciseProgressSliderComponent';
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
      this.reset = this.reset.bind(this);
      this.switchCountingUp = this.switchCountingUp.bind(this);
      this.getStep = this.getStep.bind(this);
      this.startExercise = this.startExercise.bind(this);
      const exerciseData = getExerciseInProgress(this.weekNr, this.dayNr);
      const currentExercisePosition = exerciseData ? exerciseData[2] : 0;
      const currentIntervalPosition = this.getIntervalSeconds(
        exercises[this.weekNr][this.dayNr].machine,
        currentExercisePosition,
        this.calculateIntervalIndex(exercises[this.weekNr][this.dayNr].machine, currentExercisePosition)
      );
      this.state = {
        totalElapsedTime: currentExercisePosition,
        intervalElapsedTime: currentIntervalPosition,
        action: 'idle',
        badRequest: false,
        isCountingUp: true,
        intervalId: null,
        isEnded: false,
        intervalIndex: this.calculateIntervalIndex(exercises[this.weekNr][this.dayNr].machine, currentExercisePosition)
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
    if (this.state.isEnded) {
      this.reset(() => {
        this.setState({
          isEnded: false,
          action: this.getStep(this.state.intervalIndex)
        }, this.startExercise);
      });
    } else {
      this.setState({
        isEnded: false,
        action: this.getStep(this.state.intervalIndex)
      }, this.startExercise);
    }
  }

  reset (cb) {
    clearInterval(this.state.intervalId);
    this.setState({
      intervalId: null,
      intervalIndex: 0,
      intervalElapsedTime: 0,
      totalElapsedTime: 0,
      action: 'idle'
    }, cb);
    resetExercise(this.weekNr, this.dayNr);
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

  getIntervalSeconds (arr, currentExercisePosition, intervalIndex) {
    let x = 0;
    for (let i = 0; i < intervalIndex; i++) {
      x += arr[i];
    }
    return currentExercisePosition - x;
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
      this.setState({
        action: 'paused',
        intervalId: null
      });
      setExerciseInProgress(this.weekNr, this.dayNr, this.state.totalElapsedTime);
    }
  }

  switchCountingUp () {
    if (!this.state.isCountingUp) {
      this.setState({
        isCountingUp: true
      });
    } else {
      this.setState({
        isCountingUp: false
      });
    }
  }

  convertMinutestoSeconds (seconds) {
    return Math.floor(seconds / 60) + ':' + (seconds % 60 < 10 ? '0' + seconds % 60 : seconds % 60);
  }

  startExercise () {
    const intervalId = setInterval(() => {
      if (this.state.intervalElapsedTime === exercises[this.weekNr][this.dayNr].machine[this.state.intervalIndex]) {
        if (this.state.intervalIndex === exercises[this.weekNr][this.dayNr].machine.length - 1) {
          clearInterval(intervalId);
          this.setState({
            action: 'ended',
            intervalId: null,
            isEnded: true
          });
          setExerciseAsComplete(this.weekNr, this.dayNr);
        } else {
          this.setState({
            totalElapsedTime: this.state.totalElapsedTime + 1,
            intervalElapsedTime: 1,
            action: this.state.action === 'run' ? 'walk' : 'run',
            intervalIndex: this.state.intervalIndex + 1
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
        <span className='description-week-day'> Week {this.weekNr} Exercise {this.dayNr} </span>
        <span className="show-human-exercises">{exercises[this.weekNr][this.dayNr].human}</span>
        {this.state.intervalId
          ? <button className="pause-start-button" onClick={() => { this.pause(); }}>Pause</button>
          : <button className="pause-start-button" onClick={() => { this.start(); }}>Start</button>}
        <button className="reset-button" onClick={() => { this.reset(); }}>Reset</button>
        <ExcerciseProgressSliderComponent currentPosition={this.state.totalElapsedTime}
          currentSeconds={this.state.totalElapsedTime}
          exercise={exercises[this.weekNr][this.dayNr].machine} />
        <div className="exercise-data-container">
          <div className='counting-seconds-container'>
            <div className="counting-seconds-data">
              {this.state.isCountingUp
                ? <div>
                  <div className='elapsed-time'>
                    <div className='exercise-text-data'>Interval Time</div>
                    <div className='seconds'>{this.convertMinutestoSeconds(this.state.intervalElapsedTime)}
                    </div>
                  </div>
                  <div className='exercise-text-data'> Elapsed Time</div>
                  <div className='seconds'>{this.convertMinutestoSeconds(this.state.totalElapsedTime)}</div>
                </div>
                : <div>
                  <div className='exercise-text-data'> Remaining Interval</div>
                  <div className='seconds'>
                    {this.convertMinutestoSeconds(
                      exercises[this.weekNr][this.dayNr].machine[this.state.intervalIndex] - this.state.intervalElapsedTime
                    )}
                  </div>
                  <div className='exercise-text-data'> Remaining Total</div>
                  <div className='seconds'> {
                    this.convertMinutestoSeconds(
                      this.getTotalExerciseTime(exercises[this.weekNr][this.dayNr].machine) - this.state.totalElapsedTime
                    )
                  }</div>
                </div>
              }
            </div>
            <div className="total-exercise-time">
              <button className="switch-button" onClick={() => { this.switchCountingUp(); }}> Change </button>

              <div className='exercise-text-data'>Duration</div>
              <div className='seconds'>
                {
                  this.convertMinutestoSeconds(
                    this.getTotalExerciseTime(exercises[this.weekNr][this.dayNr].machine)
                  )
                }</div>
            </div>
          </div>
          <div className="state-action">{this.state.action}</div>
        </div>
      </div>;
    } else {
      return <div> Please choose the right week and day when clicking! </div>;
    }
  }
}
export default WeekComponent;
