/* eslint-disable eqeqeq */
import React from 'react';
import './HomeComponent.css';
import { Link } from 'react-router-dom';
import { getObject } from '../exerciseStorageService';
import { DAY_ONE, DAY_TWO, DAY_THREE } from '../constants.js';

function HomeComponent () {
  function getWeekStatus (weekNumber) {
    const exerciseData = getObject();
    const isDayOneFinished = !!(exerciseData.finished.find(x => x[0] == weekNumber && x[1] == 1));
    const isDayTwoFinished = !!(exerciseData.finished.find(x => x[0] == weekNumber && x[1] == 2));
    const isDayThreeFinished = !!(exerciseData.finished.find(x => x[0] == weekNumber && x[1] == 3));

    if (isDayThreeFinished) {
      return DAY_THREE;
    }
    if (isDayTwoFinished) {
      return DAY_TWO;
    }

    if (isDayOneFinished) {
      return DAY_ONE;
    }
    return 0;
  }
  return (
    <nav>
      <div className="header">27 DAYS PROGRAM</div>
      <div className="paragraph">Running application designed to give you the best results.
      </div>
      <div className="nav-links">

        <div className={'week-container week-container-one size' + getWeekStatus(1)}>
          <span className="week-marker">Week 1</span>
          <WeekDayComponent day="1" week="1" />
          <WeekDayComponent day="2" week="1" />
          <WeekDayComponent day="3" week="1" />
        </div>
        <div className={'week-container week-container-two size' + getWeekStatus(2)}>
          <span className="week-marker">Week 2</span>
          <WeekDayComponent day="1" week="2" />
          <WeekDayComponent day="2" week="2" />
          <WeekDayComponent day="3" week="2" />
        </div>
        <div className={'week-container week-container-three size' + getWeekStatus(3)}>
          <span className="week-marker">Week 3</span>
          <WeekDayComponent day="1" week="3" />
          <WeekDayComponent day="2" week="3" />
          <WeekDayComponent day="3" week="3" />
        </div>
        <div className={'week-container week-container-four size' + getWeekStatus(4)}>
          <span className="week-marker">Week 4</span>
          <WeekDayComponent day="1" week="4" />
          <WeekDayComponent day="2" week="4" />
          <WeekDayComponent day="3" week="4" />
        </div>
        <div className={'week-container week-container-five size' + getWeekStatus(5)}>
          <span className="week-marker">Week 5</span>
          <WeekDayComponent day="1" week="5" />
          <WeekDayComponent day="2" week="5" />
          <WeekDayComponent day="3" week="5" />
        </div>
        <div className={'week-container week-container-six size' + getWeekStatus(6)}>
          <span className="week-marker">Week 6</span>
          <WeekDayComponent day="1" week="6" />
          <WeekDayComponent day="2" week="6" />
          <WeekDayComponent day="3" week="6" />
        </div>
        <div className={'week-container week-container-seven size' + getWeekStatus(7)}>
          <span className="week-marker">Week 7</span>
          <WeekDayComponent day="1" week="7" />
          <WeekDayComponent day="2" week="7" />
          <WeekDayComponent day="3" week="7" />
        </div>
        <div className={'week-container week-container-eight size' + getWeekStatus(8)}>
          <span className="week-marker">Week 8</span>
          <WeekDayComponent day="1" week="8" />
          <WeekDayComponent day="2" week="8" />
          <WeekDayComponent day="3" week="8" />
        </div>
        <div className={'week-container week-container-nine size' + getWeekStatus(9)}>
          <span className="week-marker">Week 9</span>
          <WeekDayComponent day="1" week="9" />
          <WeekDayComponent day="2" week="9" />
          <WeekDayComponent day="3" week="9" />
        </div>
      </div>
    </nav>
  );
}

function WeekDayComponent (props) {
  const exerciseData = getObject();
  const existingFinishedData = exerciseData.finished.find(x => x[0] === props.week && x[1] === props.day);
  const inProgressData = exerciseData.progress.find(x => x[0] === props.week && x[1] === props.day);
  if (existingFinishedData) {
    return <div className="weekday-container">
      <Link className="exercise-link exercise-link-completed"
        to={`/week/${props.week}/${props.day}`}>{`Day ${props.day}`}</Link>
    </div>;
  }

  if (inProgressData) {
    return <div className="weekday-container">
      <Link className="exercise-link exercise-link-progress"
        to={`/week/${props.week}/${props.day}`}>{`Day ${props.day}`}</Link>
    </div>;
  }

  return <div className="weekday-container">
    <Link className="exercise-link" to={`/week/${props.week}/${props.day}`}>{`Day ${props.day}`}</Link>
  </div>;
}

export default HomeComponent;
