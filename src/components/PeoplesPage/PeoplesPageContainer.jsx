import {
    addPeople,
    setCurrentPage,
    setPeoples,
    setTotalPeoplesCount,
    TogglePreloader
} from "../../redux/PeoplesPageReducer";
import {connect} from "react-redux";
import React, {useEffect} from 'react';
import axios from "axios";
import PeoplesPage from "./PeoplesPage";
import Preloader from "../common/Preloader/Preloader";

/*Отображаемый материал страницы*/
const PeoplesPageContainer = (props) => {
    let baseUrl = 'https://swapi.dev/api';
    useEffect(() => {
            props.TogglePreloader(true)
            axios.get(baseUrl + `/people/?page=${props.currentPage}`).then(response => {
                props.TogglePreloader(false);
                props.setPeoples(response.data.results);
                props.setTotalPeoplesCount(response.data.count);
            })
        }, []
    );
    /*Запрос новой страницы*/
    let onPageChange = (page) => {
        props.TogglePreloader(true)
        props.setCurrentPage(page);
        axios.get(baseUrl + `/people/?page=${page}`).then(response => {
            props.TogglePreloader(false);
            props.setPeoples(response.data.results)
        });
    }

    return (
        <>
            {props.isFetching ? <Preloader /> : null}
            <PeoplesPage onPageChange={onPageChange} addPeople={props.addPeople}
                         peoples={props.peoples} totalPeoplesCount={props.totalPeoplesCount}
                         pageSize={props.pageSize} currentPage={props.currentPage}/>
        </>
    )
}

const mapStateToProps = (state) => ({
        peoples: state.peoplesPage.peoples,
        pageSize: state.peoplesPage.pageSize,
        totalPeoplesCount: state.peoplesPage.totalPeoplesCount,
        currentPage: state.peoplesPage.currentPage,
        isFetching: state.peoplesPage.isFetching,
})
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addPeople: () => {
//             let action = addPeopleAC('Эвоки');
//             dispatch(action)
//         },
//         setPeoples: (peoples) => {
//             let action = setPeoplesAC(peoples);
//             dispatch(action)
//         },
//         setCurrentPage: (currentPage) => {
//             let action = setCurrentPageAC(currentPage);
//             dispatch(action)
//         },
//         setTotalPeoplesCount: (totalCount) => {
//             let action = setTotalPeoplesCountAC(totalCount);
//             dispatch(action)
//         },
//         TogglePreloader: (toggle) => {
//             let action = TogglePreloaderAC(toggle);
//             dispatch(action)
//         },
//     }
// }

export default connect(mapStateToProps, { addPeople, setPeoples, setCurrentPage, setTotalPeoplesCount, TogglePreloader,}
)(PeoplesPageContainer);