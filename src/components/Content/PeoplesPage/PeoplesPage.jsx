import React from 'react';
import styles from './PeoplesPage.module.css';
import ContentItem from "../ContentItem/ContentItem";
import {addPeopleActionCreator} from "../../../redux/state";
// import {SearchText} from "../../../redux/state";

/*Отображаемый материал страницы*/
const PeoplesPage = (props) => {
    /*Мапинг исходного массива объектов*/
    let contentPeople = props.peoplesPage.peoples.map(p => <ContentItem id={p.id} name={p.name} image={p.img}/>)
    let action = addPeopleActionCreator('Эвоки');

    // let peoples = props.peoplesPage.peoples;
    // let contentPeople = (peoples) => {
    //     if (SearchText(props) >= 0) {
    //         if (SearchText(props) == peoples.id) {
    //             /*Мапинг исходного массива объектов*/
    //             return peoples.map(p => <ContentItem id={p.id} name={p.name} image={p.img}/>)
    //         }
    //     } else {
    //         return peoples.map(p => <ContentItem id={p.id} name={p.name} image={p.img}/>)
    //     }
    // }

    return (
        <div className={styles.content}>
            {/*{contentPeople(peoples)}*/}
            { contentPeople }
            {props.dispatch(action)}
        </div>
    )
}

export default PeoplesPage;