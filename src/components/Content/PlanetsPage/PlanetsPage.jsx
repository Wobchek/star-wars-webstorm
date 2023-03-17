import React from 'react';
import styles from './PlanetsPage.module.css';
import ContentItem from "../ContentItem/ContentItem";


/*Отображаемый материал страницы*/
const PlanetsPage = (props) => {
    /*Мапинг исходного массива объектов*/
    let contentPlanets = props.planetsPage.planets.map(p => <ContentItem id={p.id} name={p.name} image={p.img}/>)

    return (
        <div>
            <div className={styles.content}>
                {contentPlanets}
                {props.addPlanet('Земля')}
            </div>
        </div>
    )
}

export default PlanetsPage;