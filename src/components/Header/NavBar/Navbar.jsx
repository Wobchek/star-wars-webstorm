import React from 'react';
import styles from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <nav className={styles.navbar}>
            <NavLink
                to="/planets"
                className={({isActive, isPending}) =>
                    isPending ? styles.pending : isActive ? styles.active : ""
                }
            >Планеты</NavLink>

            <NavLink
                to="/peoples"
                className={({isActive, isPending}) =>
                    isPending ? styles.pending : isActive ? styles.active : ""
                }
            >Персонажи</NavLink>
        </nav>
    )
}

export default NavBar;