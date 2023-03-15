import planetImage from "../assets/images/Earth.png";
import lukeSkywalker from "../assets/images/Luke_Skywalker.jpg";
import darthVader from "../assets/images/Darth_Vader.jpg";
import leiaOrgana from "../assets/images/Leia_Organa.jpg";
import obiWanKenobi from "../assets/images/Obi_Wan_Kenobi.jpg";
import chewbacca from "../assets/images/Chewbacca.jpg";
import hanSolo from "../assets/images/Han_Solo.jpg";
import defaultImg from "../assets/images/Peoples.jpg";
import {rerenderEntireTree} from "../render";

let state = {

    planetsPage: {
        /*Массив планет*/
        planets: [
            {id: 1, name: "Меркурий", img: planetImage,},/*Заменить изображение на соответсвующие*/
            {id: 2, name: "Венера", img: planetImage,},/*Заменить изображение на соответсвующие*/
            {id: 3, name: "Земля", img: planetImage,},/*Заменить изображение на соответсвующие*/
            {id: 4, name: "Марс", img: planetImage,},/*Заменить изображение на соответсвующие*/
            {id: 5, name: "Юпитер", img: planetImage,},/*Заменить изображение на соответсвующие*/
            {id: 6, name: "Сатурн", img: planetImage,},/*Заменить изображение на соответсвующие*/
        ],
    },

    peoplesPage: {
        /*Массив персонажей*/
        peoples: [
            {id: 1, name: "Люк Скайуокер", img: lukeSkywalker,},/*Заменить изображение на соответсвующие*/
            {id: 2, name: "Дарт Вейдер", img: darthVader,},/*Заменить изображение на соответсвующие*/
            {id: 3, name: "Лея Органа", img: leiaOrgana,},/*Заменить изображение на соответсвующие*/
            {id: 4, name: "Оби-Ван Кеноби", img: obiWanKenobi,},/*Заменить изображение на соответсвующие*/
            {id: 5, name: "Чубакка", img: chewbacca,},/*Заменить изображение на соответсвующие*/
            {id: 6, name: "Хан Соло", img: hanSolo,},/*Заменить изображение на соответсвующие*/
        ],
    },
}

export let addPeople = (peopleName) => {
    let newPeople = {
        id: 7,
        name: peopleName,
        img: defaultImg,
    }

    state.peoplesPage.peoples.push(newPeople)
    // rerenderEntireTree(state);
}

export let addPlanet = (planetName) => {
    let newPlanet = {
        id: 7,
        name: planetName,
        img: planetImage,
    }

    state.planetsPage.planets.push(newPlanet)
    // rerenderEntireTree(state);
}

export default state;