import React from "react";
import "./description.css";

export default function ProgressSliderDescription(props) {
  debugger;
  var exercise = props.exercise;
  var state = "";
  const getStep = index => {
    if (index === 0) {
      return "warmup";
    }
    else if(index%2 === 1){return "run"}
    else{return "walk"}
  };
  

  let totalLength = exercise.reduce((prev, curr) => prev + curr, 0);

  let exerciseComponents = props.exercise.map((x, index) => (
    <div
      style={{ width: (100 * x) / totalLength + "%" }}
      className="description"
      key={index}
    >
      {getStep(index)}
    </div>
  ));

  return <div>{exerciseComponents}</div>;
}
