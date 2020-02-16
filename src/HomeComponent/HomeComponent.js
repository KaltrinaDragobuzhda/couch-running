import React from 'react';
import './HomeComponent.css';
import { Link } from 'react-router-dom';
import { getObject } from '../exerciseStorageService';

function HomeComponent () {
  return (
    <nav>
      <div className="header">90 DAYS PROGRAM</div>
      <div className="paragraph">This is a running Exercise that will help
        you get in shape.
      </div>
      <div className="nav-links">
        <div className='week-container1'>
          <span className="week-marker">Week 1</span>
          <WeekDayComponent day="1" week="1" />
          <WeekDayComponent day="2" week="1" />
          <WeekDayComponent day="3" week="1" />
        </div>
        <div className='week-container2'>
          <span className="week-marker">Week 2</span>
          <WeekDayComponent day="1" week="2" />
          <WeekDayComponent day="2" week="2" />
          <WeekDayComponent day="3" week="2" />
        </div>
        <div className='week-container3'>
          <span className="week-marker">Week 3</span>
          <WeekDayComponent day="1" week="3" />
          <WeekDayComponent day="2" week="3" />
          <WeekDayComponent day="3" week="3" />
        </div>
        <div className='week-container4'>
          <span className="week-marker">Week 4</span>
          <WeekDayComponent day="1" week="4" />
          <WeekDayComponent day="2" week="4" />
          <WeekDayComponent day="3" week="4" />
        </div>
        <div className='week-container5'>
          <span className="week-marker">Week 5</span>
          <WeekDayComponent day="1" week="5" />
          <WeekDayComponent day="2" week="5" />
          <WeekDayComponent day="3" week="5" />
        </div>
        <div className='week-container6'>
          <span className="week-marker">Week 6</span>
          <WeekDayComponent day="1" week="6" />
          <WeekDayComponent day="2" week="6" />
          <WeekDayComponent day="3" week="6" />
        </div>
        <div className='week-container7'>
          <span className="week-marker">Week 7</span>
          <WeekDayComponent day="1" week="7" />
          <WeekDayComponent day="2" week="7" />
          <WeekDayComponent day="3" week="7" />
        </div>
        <div className='week-container8'>
          <span className="week-marker">Week 8</span>
          <WeekDayComponent day="1" week="8" />
          <WeekDayComponent day="2" week="8" />
          <WeekDayComponent day="3" week="8" />
        </div>
        <div className='week-container9'>
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
      <Link className="exercise-link exercise-link-completed" to={`/week/${props.week}/${props.day}`}>{`Day ${props.day}`}</Link>
    </div>;
  }

  if (inProgressData) {
    return <div className="weekday-container">
      <Link className="exercise-link exercise-link-progress" to={`/week/${props.week}/${props.day}`}>{`Day ${props.day}`}</Link>
    </div>;
  }

  return <div className="weekday-container">
    <Link className="exercise-link" to={`/week/${props.week}/${props.day}`}>{`Day ${props.day}`}</Link>
  </div>;
}

export default HomeComponent;
