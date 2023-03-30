import React from 'react';
import Logo from "./Logo";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        logo: state.logo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const LogoContainer = connect(mapStateToProps, null)(Logo)

export default LogoContainer;