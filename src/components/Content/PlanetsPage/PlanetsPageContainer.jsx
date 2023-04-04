import PlanetsPage from "./PlanetsPage";
import {connect} from "react-redux";
import {addPlanetAC} from "../../../redux/PlanetsPageReducer";


const mapStateToProps = (state) => {
    return {
        planetsPage: state.planetsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlanet: () => {
            let action = addPlanetAC('Земля');
            dispatch(action)
        }
    }
}

const PlanetsPageContainer = connect(mapStateToProps, mapDispatchToProps)(PlanetsPage)

export default PlanetsPageContainer;