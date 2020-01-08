import React from 'react';
import './HomeComponent.css';
import { Link } from 'react-router-dom';


function HomeComponent() {

  return (
    <nav>
      <button onClick={console.log('clicked')}> Click me </button>
      <div className="nav-links">
        <div className='week-container'>
          <span className="week-marker">1</span>
          <WeekDayComponent day="1" week="1" />
          <WeekDayComponent day="2" week="1" />
          <WeekDayComponent day="3" week="1" />
        </div>
        <div className='week-container'>
          <span className="week-marker">2</span>
          <WeekDayComponent day="1" week="2" />
          <WeekDayComponent day="2" week="2" />
          <WeekDayComponent day="3" week="2" />
        </div>
        <div className='week-container'>
          <span className="week-marker">3</span>
          <WeekDayComponent day="1" week="3" />
          <WeekDayComponent day="2" week="3" />
          <WeekDayComponent day="3" week="3" />
        </div>
        <div className='week-container'>
          <span className="week-marker">4</span>
          <WeekDayComponent day="1" week="4" />
          <WeekDayComponent day="2" week="4" />
          <WeekDayComponent day="3" week="4" />
        </div>
        <div className='week-container'>
          <span className="week-marker">5</span>
          <WeekDayComponent day="1" week="5" />
          <WeekDayComponent day="2" week="5" />
          <WeekDayComponent day="3" week="5" />
        </div>
        <div className='week-container'>
          <span className="week-marker">6</span>
          <WeekDayComponent day="1" week="6" />
          <WeekDayComponent day="2" week="6" />
          <WeekDayComponent day="3" week="6" />
        </div>
        <div className='week-container'>
          <span className="week-marker">7</span>
          <WeekDayComponent day="1" week="7" />
          <WeekDayComponent day="2" week="7" />
          <WeekDayComponent day="3" week="7" />
        </div>
        <div className='week-container'>
          <span className="week-marker">8</span>
          <WeekDayComponent day="1" week="8" />
          <WeekDayComponent day="2" week="8" />
          <WeekDayComponent day="3" week="8" />
        </div>
        <div className='week-container'>
          <span className="week-marker">9</span>
          <WeekDayComponent day="1" week="9" />
          <WeekDayComponent day="2" week="9" />
          <WeekDayComponent day="3" week="9" />
        </div>
      </div>
    </nav>
  );
}

function WeekDayComponent(props) {
  return <div className="weekday-container"><Link className="exercise-link" to={`/week/${props.week}/${props.day}`}>{props.day}</Link></div>;
}

export default HomeComponent;
