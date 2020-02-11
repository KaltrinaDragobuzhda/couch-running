import React from 'react';
import './description.css';

export default function ProgressSliderDescription (props) {
  const exercise = props.exercise;

  const getStep = index => {
    if (index === 0) {
      return 'warmup';
    }

    if (index % 2 === 1) {
      return 'run';
    }

    return 'walk';
  };

  const totalLength = exercise.reduce((prev, curr) => prev + curr, 0);

  const exerciseComponents = props.exercise.map((x, index) => (
    <div
      style={{ width: (100 * x) / totalLength + '%' }}
      className="description"
      key={index}
    >
      {getStep(index)}
    </div>
  ));

  return <div>{exerciseComponents}</div>;
}
