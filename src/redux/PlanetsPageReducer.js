import planetImage from "../assets/images/Earth.png";

const ADD_PLANET = 'ADD-PLANET';

let initialState = {
    /*Массив планет*/
    planets: [
        {id: 1, name: "Меркурий", img: planetImage, modal: "Меркурий модальное окно",},/*Заменить изображение на соответсвующие*/
        {id: 2, name: "Венера", img: planetImage, modal: "Венера модальное окно",},/*Заменить изображение на соответсвующие*/
        {id: 3, name: "Земля", img: planetImage, modal: "Земля модальное окно",},/*Заменить изображение на соответсвующие*/
        {id: 4, name: "Марс", img: planetImage, modal: "Марс модальное окно",},/*Заменить изображение на соответсвующие*/
        {id: 5, name: "Юпитер", img: planetImage, modal: "Юпитер модальное окно",},/*Заменить изображение на соответсвующие*/
        {id: 6, name: "Сатурн", img: planetImage, modal: "Сатурн модальное окно",},/*Заменить изображение на соответсвующие*/
    ],
};

const planetsPageReducer = (state = initialState, action) => {
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