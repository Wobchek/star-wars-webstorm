import {useState} from "react";
import {connect} from "react-redux";
import {
    getPeoplesFilms,
    getPeoplesHomeworld,
    getPeoplesStarships,
    getPeoplesVehicles
} from "../../../redux/PeoplesPageReducer";
import Card from "./Card";

/*Наполнение карточки и модального окна*/
const CardContainer = (props) => {
    const [modalActive, setModalActive] = useState(false)
    let data = props.modalInfo;
    let openModelBtn = () => {
        setModalActive(true)
        props.getPeoplesHomeworld(data.homeworld);
        props.getPeoplesFilms(data.films);
        props.getPeoplesVehicles(data.vehicles);
        props.getPeoplesStarships(data.starships);
    }
    return (
        <>
            <Card openModelBtn={openModelBtn} modalActive={modalActive}
                  setActive={setModalActive} setModalActive={setModalActive}
                  data={data} homeworld={props.homeworld} films={props.films}
                  vehicles={props.vehicles} starships={props.starships}
                  name={props.name} image={props.image}/>
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
    {
        getPeoplesHomeworld, getPeoplesFilms,
        getPeoplesVehicles, getPeoplesStarships
    }
)(CardContainer);