import styles from "./InsideModalText.module.css";
import React from 'react'

const InsideModalText = (props) => {
    let data = props.modalInfo;
    return (
        <div className={styles.text}>
            <h1>{data.name}</h1>
            {/*<ul>*/}
            {/*    <li>Рост: 133 см</li>*/}
            {/*    <li>Вес: 200 кг</li>*/}
            {/*    <li>Цвет волос: белый</li>*/}
            {/*    <li>Цвет кожи: светлый</li>*/}
            {/*    <li>Цвет глаз: карий</li>*/}
            {/*    <li>Год рождения: дадатогда</li>*/}
            {/*</ul>*/}
            <ul>
                <li>Вес: {data.mass}</li>
                <li>Цвет волос: {data.hair_color}</li>
                <li>Цвет кожи: {data.skin_color}</li>
                <li>Цвет глаз: {data.eye_color}</li>
                <li>Год рождения: {data.birth_year}</li>
                <li>Пол: {data.gender}</li>
                {/*<li>Место рождения: {data.homeworld}</li>*/}
                {/*<li>Фильмы: {data.films}</li>*/}
                {/*<li>Транспорты: {data.vehicles}</li>*/}
                {/*<li>Звездолеты: {data.starships}</li>*/}
            </ul>
        </div>
    )
}

export default InsideModalText;