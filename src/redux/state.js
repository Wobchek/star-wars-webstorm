import logoImage from '../assets/images/star-wars-logo.jpg';
//Изображения для страницы планет
import planetImage from "../assets/images/Earth.png";
//Изображения для страницы людей
import lukeSkywalker from "../assets/images/Luke_Skywalker.jpg";
import darthVader from "../assets/images/Darth_Vader.jpg";
import leiaOrgana from "../assets/images/Leia_Organa.jpg";
import obiWanKenobi from "../assets/images/Obi_Wan_Kenobi.jpg";
import chewie from "../assets/images/Chewie.jpg";
import hanSolo from "../assets/images/Han_Solo.jpg";
import planetsPageReducer from "./PlanetsPageReducer";
import peoplesPageReducer from "./PeoplesPageReducer";

let store = {
    _state: {
        //Логотип
        logo: {
            id: 1,
            img: logoImage,
        },
        //Страница с планетами
        planetsPage: {
            /*Массив планет*/
            planets: [
                {id: 1, name: "Меркурий", img: planetImage, modal: "Меркурий модальное окно",},/*Заменить изображение на соответсвующие*/
                {id: 2, name: "Венера", img: planetImage, modal: "Венера модальное окно",},/*Заменить изображение на соответсвующие*/
                {id: 3, name: "Земля", img: planetImage, modal: "Земля модальное окно",},/*Заменить изображение на соответсвующие*/
                {id: 4, name: "Марс", img: planetImage, modal: "Марс модальное окно",},/*Заменить изображение на соответсвующие*/
                {id: 5, name: "Юпитер", img: planetImage, modal: "Юпитер модальное окно",},/*Заменить изображение на соответсвующие*/
                {id: 6, name: "Сатурн", img: planetImage, modal: "Сатурн модальное окно",},/*Заменить изображение на соответсвующие*/
            ],
        },
        //Страница с персонажами
        peoplesPage: {
            /*Массив персонажей*/
            peoples: [
                {id: 1, name: "Люк Скайуокер", img: lukeSkywalker, modal: "Люк Скайуокер модальное окно",},
                {id: 2, name: "Дарт Вейдер", img: darthVader, modal: "Дарт Вейдер модальное окно",},
                {id: 3, name: "Лея Органа", img: leiaOrgana, modal: "Лея Органа модальное окно",},
                {id: 4, name: "Оби-Ван Кеноби", img: obiWanKenobi, modal: "Оби-Ван Кеноби модальное окно",},
                {id: 5, name: "Чуи", img: chewie, modal: "Чуи модальное окно",},
                {id: 6, name: "Хан Соло", img: hanSolo, modal: "Хан Соло модальное окно",},
            ],
        },
    },
    _callSubscriber() {
    }, //Пустая функция вызова ререндора

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }, //Наблюдает за обновленими

    dispatch(action) { // action { type: 'ADD-POST' }
        this._state.planetsPage = planetsPageReducer(this._state.planetsPage, action);
        this._state.peoplesPage = peoplesPageReducer(this._state.peoplesPage, action);

        // this._callSubscriber(this._state);
    },
}

export default store;