export function getObject () {
  const stringObj = localStorage.getItem('obj');
  const obj = JSON.parse(stringObj);
  return obj;
}

export function setObject (obj) {
  localStorage.setItem('obj', JSON.stringify(obj));
}

export function setExerciseAsComplete (weekNr, dayNr) {
  const exerciseData = getObject();
  const existingData = exerciseData.finished.find(x => x[0] === weekNr && x[1] === dayNr);
  exerciseData.progress = exerciseData.progress.filter(x => !(x[0] === weekNr && x[1] === dayNr));
  if (!existingData) {
    exerciseData.finished.push([weekNr, dayNr]);
  }
  setObject(exerciseData);
}

export function getExerciseInProgress (weekNr, dayNr) {
  const allExercisesData = getObject();
  const exerciseData = allExercisesData.progress.find(x => x[0] === weekNr && x[1] === dayNr);
  return exerciseData;
}

export function setExerciseInProgress (weekNr, dayNr, position) {
  const exerciseData = getObject();
  const result = exerciseData.progress.find(x => x[0] === weekNr && x[1] === dayNr);
  if (!result) {
    exerciseData.progress.push([weekNr, dayNr, position]);
    setObject(exerciseData);
  } else {
    result[2] = position;
    setObject(exerciseData);
  }
}
