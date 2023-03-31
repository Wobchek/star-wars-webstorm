import PeoplesPage from "./PeoplesPage";
import {addPeopleActionCreator} from "../../../redux/PeoplesPageReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        peoplesPage: state.peoplesPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPeople: () => {
            let action = addPeopleActionCreator('Эвоки');
            dispatch(action)
        },
    }
}

const PeoplesPageContainer = connect(mapStateToProps, mapDispatchToProps)(PeoplesPage);

export default PeoplesPageContainer;