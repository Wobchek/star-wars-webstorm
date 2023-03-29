import React from 'react';
import PlanetsPage from "./PlanetsPage";
import {addPlanetActionCreator} from "../../../redux/PlanetsPageReducer";

function PlanetsPageContainer(props) {
    let newPlanet = () => {
        let action = addPlanetActionCreator('Земля');
        props.dispatch(action)
    }
    return (
        <PlanetsPage planetsPage={props.planetsPage} addPlanet={newPlanet}/>
    )
}

export default PlanetsPageContainer;