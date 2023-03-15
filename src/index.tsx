import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {addPeople, addPlanet} from "./redux/state";
// import {rerenderEntireTree} from "./render";

ReactDOM.render(
  <BrowserRouter>
    <App state={state} addPeople={addPeople} addPlanet={addPlanet}/>
  </BrowserRouter>,
    document.getElementById('root'));

// rerenderEntireTree(state);

