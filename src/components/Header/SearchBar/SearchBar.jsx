import React from 'react';
import styles from './SearchBar.module.css'
import {updateSearchTextActionCreator} from "../../../redux/state";

const SearchBar = (props) => {
    let searchRef = React.createRef()
    let onSearchChangeFunction = () => {
        let text = searchRef.current.value;
        let action = updateSearchTextActionCreator(text)
        props.dispatch(action);
    }

    return (
        <div className={styles.filter}>
            <textarea ref={searchRef} onChange={onSearchChangeFunction} value={props.state.newSearchText.name}/>
        </div>
    )
}

export default SearchBar;