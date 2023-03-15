import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import ContentContainer from "./components/Content/ContentContainer";



function App(props: any) {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <ContentContainer state={props.state} addPeople={props.addPeople} addPlanet={props.addPlanet}/>
        </div>
    )
}


export default App;
