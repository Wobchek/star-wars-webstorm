import React from 'react';
import SearchBar from "./SearchBar";

class SearchBarContainer extends React.Component {

    render() {
        return (
            <SearchBar {...this.props}/>
        )
    };
}

export default SearchBarContainer;