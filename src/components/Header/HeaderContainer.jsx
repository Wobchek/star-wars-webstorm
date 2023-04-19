import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";

const HeaderContainer = (props) => {
    return (
            <Header logo={props.logo}/>
    )
}

const mapStateToProps = (state) => ({
        logo: state.logo,
})

export default connect(mapStateToProps)(HeaderContainer);