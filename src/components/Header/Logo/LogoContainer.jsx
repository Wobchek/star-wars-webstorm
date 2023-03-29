import React from 'react';
import Logo from "./Logo";

function LogoContainer(props) {
    return (
        <Logo logo={props.state.img}/>
    )
}

export default LogoContainer;