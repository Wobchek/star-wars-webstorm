import PeoplesPage from "./PeoplesPage";
import {addPeopleAC, setCurrentPageAC, setPeoplesAC} from "../../../redux/PeoplesPageReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        peoples: state.peoplesPage.peoples,
        pageSize: state.peoplesPage.pageSize,
        totalPeoplesCount: state.peoplesPage.totalPeoplesCount,
        currentPage: state.peoplesPage.currentPage,
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
        setCurrentPage: (currentPage) => {
            let action = setCurrentPageAC(currentPage);
            dispatch(action)
        },
    }
}

const PeoplesPageContainer = connect(mapStateToProps, mapDispatchToProps)(PeoplesPage);

export default PeoplesPageContainer;