import React from 'react';
import styles from './Content.module.css';
import Card from "./Card/Card";


const Content = (props) => {
    return (
        <div className={styles.content}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
        </div>
    )
}

export default Content;