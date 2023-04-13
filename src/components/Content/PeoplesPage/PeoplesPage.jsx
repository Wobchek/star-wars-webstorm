import React, {useState, useEffect} from 'react';
import styles from './PeoplesPage.module.css';
import ContentItem from "../ContentItem/ContentItem";
import axios from "axios";
import peoplesImg from "../../../assets/images/LEGO_Yoda.jpg"; //default people img

/*Отображаемый материал страницы*/
const PeoplesPage = (props) => {
    let baseUrl = 'https://swapi.dev/api';
    useEffect(() => {
            axios.get(baseUrl + `/people/?page=${props.currentPage}`).then(response => {
                props.setPeoples(response.data.results);
            })}, []
    );
    /*Создание списка страниц*/
    let pageCount = Math.ceil(props.totalPeoplesCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    let mapPageCount = pages.map(p =>
        <span className={props.currentPage === p ? styles.selectedPage : ""}
            onClick={() => {onPageChange(p)} }> {p}
        </span>)
    /*Запрос новой страницы*/
    let onPageChange = (page) => {
        props.setCurrentPage(page);
        axios.get(baseUrl + `/people/?page=${page}`).then(response => {
            props.setPeoples(response.data.results)
        });
    }
    /*Мапинг исходного массива объектов*/
    let contentPeople = props.peoples.map(p =>
        <ContentItem key={p.id} name={p.name} image={p.img != null ? p.img : peoplesImg} modalInfo={p}/>);
    return (
        <div>
            <div className={styles.pageArea}>
                {mapPageCount}
            </div>
            <div className={styles.content}>
                {contentPeople}
                <button className={styles.btn} onClick={props.addPeople}>Добавить Эвока</button>
            </div>
        </div>
    )
}

export default PeoplesPage;