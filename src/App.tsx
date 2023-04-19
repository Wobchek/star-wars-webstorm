import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import HomePage from "./components/HomePage/HomePage";
import PlanetsPageContainer from "./components/PlanetsPage/PlanetsPageContainer";
import PeoplesPageContainer from "./components/PeoplesPage/PeoplesPageContainer";



function App() {
    return (
        <div className='app-wrapper'>
            <Routes>
                <Route path="/" element={<HeaderContainer/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="planets" element={<PlanetsPageContainer/>}/>
                    <Route path="peoples" element={<PeoplesPageContainer/>}/>
                    <Route path="*" element={<h2 className='undefined-route'>Ресурс не найден</h2>} />
                </Route>
            </Routes>
        </div>
    )
}


export default App;
