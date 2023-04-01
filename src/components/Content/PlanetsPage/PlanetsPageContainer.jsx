import PlanetsPage from "./PlanetsPage";
import {addPlanetCreator} from "../../../redux/PlanetsPageReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        planetsPage: state.planetsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlanet: () => {
            let action = addPlanetCreator('Земля');
            dispatch(action)
        }
    }
}

const PlanetsPageContainer = connect(mapStateToProps, mapDispatchToProps)(PlanetsPage)

export default PlanetsPageContainer;