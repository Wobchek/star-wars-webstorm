import React from 'react';
import styles from './PeoplesPage.module.css';
import ContentItem from "../ContentItem/ContentItem";
// import {SearchText} from "../../../redux/state";

/*Отображаемый материал страницы*/
const PeoplesPage = (props) => {
    /*Мапинг исходного массива объектов*/
    let contentPeople = props.peoplesPage.peoples.map(p => <ContentItem id={p.id} name={p.name} image={p.img}/>)

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
            {props.addPeople('Эвоки')}
        </div>
    )
}

export default PeoplesPage;