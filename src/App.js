import React from 'react';
import './App.css';
import WeekComponent from "./WeekComponent/WeekComponent";
import HomeComponent from "./HomeComponent/HomeComponent";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getObject, setObject } from './exerciseStorageService';

let exerciseData = getObject();
if(!exerciseData) {
  setObject({
    finished:[],
    progress:[]
  });
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/week/:weekNr/:dayNr" component={WeekComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

