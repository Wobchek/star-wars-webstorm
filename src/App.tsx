import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import ContentContainer from "./components/Content/ContentContainer";



function App(props: any) {
    return (
        <div className='app-wrapper'>
            <HeaderContainer state={props.state} dispatch={props.dispatch}/>
            <ContentContainer state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}


export default App;
