import React from 'react';
import {Routes, Route} from "react-router-dom";
import PlanetsPageContainer from "./PlanetsPage/PlanetsPageContainer";
import PeoplesPageContainer from "./PeoplesPage/PeoplesPageContainer";

/*Отображаемый материал страницы*/
const Content = (props) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PlanetsPageContainer />}/>
                <Route path="/planets" element={<PlanetsPageContainer />}/>
                <Route path="/peoples" element={<PeoplesPageContainer />}/>
            </Routes>
        </div>
    )
}

export default Content;