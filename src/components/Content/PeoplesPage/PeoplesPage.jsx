import React from 'react';
import styles from './PeoplesPage.module.css';
import ContentItem from "../ContentItem/ContentItem";

/*Отображаемый материал страницы*/
const PeoplesPage = (props) => {
    /*Мапинг исходного массива объектов*/
    let contentPeople = props.peoples.map(p =>
        <ContentItem key={p.id} name={p.name} image={p.img} modalInfo={p}/>)
    return (
        <div className={styles.content}>
            {contentPeople}
            <button className={styles.btn} onClick={props.addPeople}>Добавить Эвока</button>
        </div>
    )
}

export default PeoplesPage;