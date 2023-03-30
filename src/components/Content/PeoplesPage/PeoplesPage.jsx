import React from 'react';
import styles from './PeoplesPage.module.css';
import ContentItem from "../ContentItem/ContentItem";

/*Отображаемый материал страницы*/
const PeoplesPage = (props) => {
    /*Мапинг исходного массива объектов*/
    let contentPeople = props.peoplesPage.peoples.map(p => <ContentItem id={p.id} name={p.name} image={p.img} modal={p.modal}/>)
    return (
        <div className={styles.content}>
            { contentPeople }
            <button onClick={props.addPeople}>Добавить Эвока</button>
        </div>
    )
}

export default PeoplesPage;