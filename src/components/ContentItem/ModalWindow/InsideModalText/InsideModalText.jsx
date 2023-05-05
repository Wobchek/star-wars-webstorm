import styles from "./InsideModalText.module.css";
import React from 'react'

const InsideModalText = (props) => {
    return (
        <div className={styles.text}>
            <h1>{props.data.name}</h1>
            <ul>
                <li>Вес: {props.data.mass}</li>
                <li>Цвет волос: {props.data.hair_color}</li>
                <li>Цвет кожи: {props.data.skin_color}</li>
                <li>Цвет глаз: {props.data.eye_color}</li>
                <li>Год рождения: {props.data.birth_year}</li>
                <li>Пол: {props.data.gender}</li>
                <li>Место рождения: {props.homeworld}</li>
                <li>Фильмы: {props.films}</li>
                { props.vehicles !== " " ? <li>Транспорты: {props.vehicles}</li> : <></>}
                { props.starships !== " " ? <li>Звездолеты: {props.starships}</li> : <></>}

            </ul>
        </div>
    )
}

export default InsideModalText;