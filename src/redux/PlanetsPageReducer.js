import planetImage from "../assets/images/Earth.png";

const ADD_PLANET = 'ADD-PLANET';

const planetsPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_PLANET:
            let newPlanet = {
                id: 7,
                name: action.name,
                img: planetImage,
                modal: action.name + " модальное окно",
            }
            state.planets.push(newPlanet)
            return state;
        default:
            return state;
    }
}

export const addPlanetActionCreator = (newPlanet) => ({type: ADD_PLANET, name: newPlanet})
export default planetsPageReducer;