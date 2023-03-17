import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {addPeople, addPlanet, subscribe, updateSearchText} from "./redux/state";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPeople={addPeople} addPlanet={addPlanet} updateSearchText={updateSearchText}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree();

subscribe(rerenderEntireTree);