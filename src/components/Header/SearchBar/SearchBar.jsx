import React from 'react';
import styles from './SearchBar.module.css'

const SearchBar = (props) => {
    let searchRef = React.createRef()
    let onSearchChangeFunction = () => {
        let text = searchRef.current.value;
        props.updateSearchText(text);
    }

    return (
        <div className={styles.filter}>
            <textarea ref={searchRef} onChange={onSearchChangeFunction} value={props.state.newSearchText.name}/>
        </div>
    )
}

export default SearchBar;