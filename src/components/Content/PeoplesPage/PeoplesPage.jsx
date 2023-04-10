import React, {useState, useEffect} from 'react';
import styles from './PeoplesPage.module.css';
import ContentItem from "../ContentItem/ContentItem";
import axios from "axios";
import peoplesImg from "../../../assets/images/LEGO_Yoda.jpg"; //default people img

/*Отображаемый материал страницы*/
const PeoplesPage = (props) => {
    let baseUrl = 'https://swapi.dev/api';
    // let setPeoples = () => { -------------Было---------
    //     if (props.peoples.length === 6) {
    //         axios.get(baseUrl + '/people/').then(response => {
    //             props.setPeoples(response.data.results)})}
    // }

    // const [peoples, setPeoples] = useState(props.peoples); // -------Стало с хуком useState------
    // function getPeoplesBtn() {
    //     setPeoples(peoples.length === 6
    //         ? axios.get(baseUrl + '/people/').then(response => {props.setPeoples(response.data.results)})
    //         : peoples)
    // }
    useEffect(() => { // -------Стало с хуком useEffect------
            axios.get(baseUrl + '/people/').then(response => {
                props.setPeoples(response.data.results)
            })
        }, []
    );
    /*Мапинг исходного массива объектов*/
    let contentPeople = props.peoples.map(p =>
        <ContentItem key={p.id} name={p.name} image={p.img != null ? p.img : peoplesImg} modalInfo={p}/>)
    return (
        <div className={styles.content}>
            {/*<button onClick={getPeoplesBtn}>getPeoples</button>*/}
            {contentPeople}
            <button className={styles.btn} onClick={props.addPeople}>Добавить Эвока</button>
        </div>
    )
}

export default PeoplesPage;