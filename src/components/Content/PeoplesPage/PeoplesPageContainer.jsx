import PeoplesPage from "./PeoplesPage";
import {addPeopleCreator} from "../../../redux/PeoplesPageReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        peoplesPage: state.peoplesPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPeople: () => {
            let action = addPeopleCreator('Эвоки');
            dispatch(action)
        },
    }
}

const PeoplesPageContainer = connect(mapStateToProps, mapDispatchToProps)(PeoplesPage);

export default PeoplesPageContainer;