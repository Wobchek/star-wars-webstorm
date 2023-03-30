import React from 'react';
import PlanetsPage from "./PlanetsPage";
import {addPlanetActionCreator} from "../../../redux/PlanetsPageReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        planetsPage: state.planetsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newPlanet: () => {
            let action = addPlanetActionCreator('Земля');
            dispatch(action)
        }
    }
}

const PlanetsPageContainer = connect(mapStateToProps, mapDispatchToProps)(PlanetsPage)

export default PlanetsPageContainer;