import React from 'react';
import styles from './PlanetsPage.module.css';
import ContentItem from "../ContentItem/ContentItem";


/*Отображаемый материал страницы*/
const PlanetsPage = (props) => {
    /*Мапинг исходного массива объектов*/
    let contentPlanets = props.planetsPage.planets.map(p => <ContentItem id={p.id} name={p.name} image={p.img} modal={p.modal}/>)
    return (
        <div>
            <div className={styles.content}>
                {contentPlanets}
                <button className={styles.btn} onClick={props.addPlanet}>Добавить планету</button>
            </div>
        </div>
    )
}

export default PlanetsPage;