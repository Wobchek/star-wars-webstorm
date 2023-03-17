import React from 'react';
import styles from './Logo.module.css'
import {NavLink} from "react-router-dom";

const Logo = (props) => {
    return (
        <div>
            <NavLink to="/">
                <img className={styles.logoImg} src={props.state.img}/>
            </NavLink>
        </div>
    )
}

export default Logo;