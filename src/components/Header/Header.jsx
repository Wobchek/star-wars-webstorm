import React from 'react';
import styles from './Header.module.css'
import NavBarContainer from "./NavBar/NavBarContainer";
import SearchBarContainer from "./SearchBar/SearchBarContainer";
import LogoContainer from "./Logo/LogoContainer";

const Header = (props) => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.header_logo}>
                    <LogoContainer state={props.state.logo}/>
                </div>
                <div className={styles.header_navbar_searchbar}>
                    <NavBarContainer/>
                    <SearchBarContainer state={props.state} dispatch={props.dispatch}/>
                </div>
            </header>

        </div>
    )
}

export default Header;