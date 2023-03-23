import React from 'react';
import {Routes, Route} from "react-router-dom";
import PlanetsPageContainer from "./PlanetsPage/PlanetsPageContainer";
import PeoplesPageContainer from "./PeoplesPage/PeoplesPageContainer";

/*Отображаемый материал страницы*/
const Content = (props) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PlanetsPageContainer planetsPage={props.state.planetsPage} dispatch={props.dispatch}/>}/>
                <Route path="/planets" element={<PlanetsPageContainer planetsPage={props.state.planetsPage} dispatch={props.dispatch}/>}/>
                <Route path="/peoples" element={<PeoplesPageContainer peoplesPage={props.state.peoplesPage} dispatch={props.dispatch}/>}/>
            </Routes>
        </div>
    )
}

export default Content;