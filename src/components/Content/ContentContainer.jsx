import React from 'react';
import Content from "./Content";

class ContentContainer extends React.Component {

    render() {
        return (
            <Content {...this.props}/>
        )
    };
}

export default ContentContainer;