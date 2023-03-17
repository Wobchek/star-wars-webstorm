import React from 'react';
import Logo from "./Logo";

class LogoContainer extends React.Component {
    render() {
        return (
            <Logo {...this.props}/>
        )
    };
}

export default LogoContainer;