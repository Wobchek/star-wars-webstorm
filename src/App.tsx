import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import ContentContainer from "./components/Content/ContentContainer";
// import {Routes, Route} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <ContentContainer/>
                    {/*<div className='app-wrapper-content'>*/}
                    {/*    <Routes>*/}
                    {/*        <Route path="/planets"*/}
                    {/*               element={<PlanetsContainer/>}/>*/}

                    {/*        <Route path="/people"*/}
                    {/*               element={<PeopleContainer/>}/>*/}

                    {/*        <Route path="/spaceships"*/}
                    {/*               element={<SpaceshipsContainer/>}/>*/}
                    {/*    </Routes>*/}
                    {/*</div>*/}
                </div>
        )
    }
}


export default App;
