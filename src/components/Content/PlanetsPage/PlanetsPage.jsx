import React from 'react';
import styles from './PlanetsPage.module.css';
import ContentItem from "../ContentItem/ContentItem";
import {addPlanetActionCreator} from "../../../redux/PlanetsPageReducer";


/*Отображаемый материал страницы*/
const PlanetsPage = (props) => {
    /*Мапинг исходного массива объектов*/
    let contentPlanets = props.planetsPage.planets.map(p => <ContentItem id={p.id} name={p.name} image={p.img} modal={p.modal}/>)
    let action = addPlanetActionCreator('Земля');

    return (
        <div>
            <div className={styles.content}>
                {contentPlanets}
                {props.dispatch(action)}
            </div>
        </div>
    )
}

export default PlanetsPage;