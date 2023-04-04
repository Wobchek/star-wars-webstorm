import PeoplesPage from "./PeoplesPage";
import {addPeopleAC, setPeoplesAC} from "../../../redux/PeoplesPageReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        peoples: state.peoplesPage.peoples,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPeople: () => {
            let action = addPeopleAC('Эвоки');
            dispatch(action)
        },
        setPeoples: (peoples) => {
            let action = setPeoplesAC(peoples);
            dispatch(action)
        },
    }
}

const PeoplesPageContainer = connect(mapStateToProps, mapDispatchToProps)(PeoplesPage);

export default PeoplesPageContainer;