import React from 'react';
import PeoplesPage from "./PeoplesPage";
import {addPeopleActionCreator} from "../../../redux/PeoplesPageReducer";

function PeoplesPageContainer(props) {
    let newPeople = () => {
        let action = addPeopleActionCreator('Эвоки');
        props.dispatch(action)
    }
    return (
        <PeoplesPage peoplesPage={props.peoplesPage} addPeople={newPeople}/>
    )
}

export default PeoplesPageContainer;