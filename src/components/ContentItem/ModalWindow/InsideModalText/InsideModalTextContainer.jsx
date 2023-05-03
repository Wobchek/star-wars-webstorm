import React, {useEffect} from 'react'
import {connect} from "react-redux";
import InsideModalText from "./InsideModalText";
import {
    getPeoplesFilms,
    getPeoplesHomeworld,
    getPeoplesStarships,
    getPeoplesVehicles
} from "../../../../redux/PeoplesPageReducer";



const InsideModalTextContainer = (props) => {
    let data = props.modalInfo;
    useEffect(() => {
        props.getPeoplesHomeworld(data.homeworld);
        props.getPeoplesFilms(data.films);
        props.getPeoplesVehicles(data.vehicles);
        props.getPeoplesStarships(data.starships);
    }, [])
    return (
        <>
        <InsideModalText data={data} homeworld={props.homeworld} films={props.films} vehicles={props.vehicles} starships={props.starships}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    homeworld: state.peoplesPage.homeworld,
    films: state.peoplesPage.films,
    vehicles: state.peoplesPage.vehicles,
    starships: state.peoplesPage.starships,
})

export default connect(mapStateToProps,
    {getPeoplesHomeworld,getPeoplesFilms,
        getPeoplesVehicles,getPeoplesStarships}
)(InsideModalTextContainer);