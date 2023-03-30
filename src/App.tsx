import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import ContentContainer from "./components/Content/ContentContainer";



function App() {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <ContentContainer />
        </div>
    )
}


export default App;
