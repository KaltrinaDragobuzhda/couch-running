export function getObject(){
  let stringObj = localStorage.getItem("obj");
  let obj = JSON.parse(stringObj);
  return obj;
}

export function setObject(obj){
  localStorage.setItem("obj",JSON.stringify(obj));
}

export function setExerciseAsComplete(weekNr, dayNr) {
  let exerciseData = getObject();
  let existingData = exerciseData.finished.find(x => x[0] === weekNr && x[1] === dayNr);
  if(!existingData){
    exerciseData.finished.push([weekNr, dayNr])
    setObject(exerciseData);
  }
}