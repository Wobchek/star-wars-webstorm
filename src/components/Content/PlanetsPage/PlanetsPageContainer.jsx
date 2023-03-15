import React from 'react';
import PlanetsPage from "./PlanetsPage";

class PlanetsPageContainer extends React.Component {

    render() {
        return (
            <PlanetsPage {...this.props}/>
        )
    };
}

export default PlanetsPageContainer;