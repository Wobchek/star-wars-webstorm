import {
    addPeople, getPeoplesPaginationThunk, getPeoplesThunk, setCurrentPage,
    setPeoples, setToggleForDisable,
    setTotalPageSize, setTotalPeoplesCount,
    togglePreloader
} from "../../redux/PeoplesPageReducer";
import {connect} from "react-redux";
import React, {useEffect} from 'react';
import PeoplesPage from "./PeoplesPage";
import Preloader from "../common/Preloader/Preloader";

/*Отображаемый материал страницы*/
const PeoplesPageContainer = (props) => {
    useEffect(() => {
            props.getPeoplesPaginationThunk();
            props.getPeoplesThunk(props.currentPage);
        }, []
    );
    /*Запрос новой страницы*/
    let onPageChange = (page) => {
        props.setCurrentPage(page);
        props.getPeoplesThunk(page);
    }

    return (
        <>
            {props.isFetching
                ? <Preloader/>
                : <PeoplesPage onPageChange={onPageChange} addPeople={props.addPeople}
                               peoples={props.peoples} totalPeoplesCount={props.totalPeoplesCount}
                               pageSize={props.pageSize} currentPage={props.currentPage}
                               setToggleForDisable={props.setToggleForDisable}
                               fetchingToggleDisable={props.fetchingToggleDisable}/>
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    peoples: state.peoplesPage.peoples,
    pageSize: state.peoplesPage.pageSize,
    totalPeoplesCount: state.peoplesPage.totalPeoplesCount,
    currentPage: state.peoplesPage.currentPage,
    isFetching: state.peoplesPage.isFetching,
    fetchingToggleDisable: state.peoplesPage.fetchingToggleDisable,
})

export default connect(mapStateToProps, {
        addPeople,
        setPeoples,
        setCurrentPage,
        setTotalPeoplesCount,
        setTotalPageSize,
        togglePreloader,
        setToggleForDisable,
        getPeoplesThunk,
        getPeoplesPaginationThunk,
    }
)(PeoplesPageContainer);