import React from 'react';
import PeoplesPage from "./PeoplesPage";

class PeoplesPageContainer extends React.Component {

    render() {
        return (
            <PeoplesPage {...this.props}/>
        )
    };
}

export default PeoplesPageContainer;