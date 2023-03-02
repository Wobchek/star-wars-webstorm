import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/images/star-wars-logo.jpg';

const Header = (props) => {
    return (
        <header className={styles.header}>
                <img className={styles.header_img} src={logo}/>
        </header>
    )
}

export default Header;