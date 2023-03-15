import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPeople, addPlanet} from "./redux/state";

export let rerenderEntireTree = (state: any) => {
    // const root = createRoot(document.getElementById('root'));
    // root.render(
    //     <React.StrictMode>
    //         <App state={state} addPeople={addPeople} addPlanet={addPlanet}/>
    //     </React.StrictMode>);

};



