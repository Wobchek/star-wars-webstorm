import React from 'react';
import styles from './Header.module.css'
import {Link, NavLink, Outlet} from "react-router-dom";

const Header = (props) => {
    return (
        <>
        <header className={styles.header}>
            <Link to="/">
                <img className={styles.logoImg} src={props.logo.img} alt={'Логотип'}/>
            </Link>
            <nav className={styles.navbar}>
                <NavLink
                    to="planets"
                    className={({isActive, isPending}) =>
                        isActive ? styles.active : styles.pending
                    }
                >Планеты</NavLink>
                <NavLink
                    to="peoples"
                    className={({isActive, isPending}) =>
                        isActive ? styles.active : styles.pending
                    }
                >Персонажи</NavLink>
            </nav>
        </header>

        <Outlet />

        </>
    )
}

export default Header;