import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/images/star-wars-logo.jpg';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <NavLink to="/">
                <img className={styles.header_img} src={logo}/>
            </NavLink>
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
        </header>
    )
}

export default Header;