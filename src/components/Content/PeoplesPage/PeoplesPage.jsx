import React from 'react';
import styles from './PeoplesPage.module.css';
import ContentItem from "../ContentItem/ContentItem";
import {addPeopleActionCreator} from "../../../redux/PeoplesPageReducer";

/*Отображаемый материал страницы*/
const PeoplesPage = (props) => {
    /*Мапинг исходного массива объектов*/
    let contentPeople = props.peoplesPage.peoples.map(p => <ContentItem id={p.id} name={p.name} image={p.img} modal={p.modal}/>)
    let action = addPeopleActionCreator('Эвоки');

    return (
        <div className={styles.content}>
            {/*{contentPeople(peoples)}*/}
            { contentPeople }
            {props.dispatch(action)}
        </div>
    )
}

export default PeoplesPage;