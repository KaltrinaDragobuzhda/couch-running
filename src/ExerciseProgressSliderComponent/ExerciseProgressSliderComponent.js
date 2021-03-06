import React from 'react';
import './ExerciseProgressSliderComponent.css';

export default function ExerciseProgressSliderComponent (props) {
  const exercise = props.exercise;

  const totalLength = exercise.reduce((prev, curr) => prev + curr, 0);
  const sliderPosition = props.currentSeconds / totalLength;
  return <div className='encapsulate'><div className="exercise-slider">
    {props.exercise.map((x, index) => <div style={{ width: (100 * x / totalLength) + '%' }}
      className="exercise-slider-item" key={index}>{x}</div>)}
    <div style={{ left: (sliderPosition * 100) + '%' }} className="exercise-marker"></div>
  </div>
  </div>;
}
