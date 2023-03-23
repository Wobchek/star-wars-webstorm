import logoImage from '../assets/images/star-wars-logo.jpg';
//Изображения для страницы планет
import planetImage from "../assets/images/Earth.png";
//Изображения для страницы людей
import peoplesImg from "../assets/images/Peoples.jpg";
import lukeSkywalker from "../assets/images/Luke_Skywalker.jpg";
import darthVader from "../assets/images/Darth_Vader.jpg";
import leiaOrgana from "../assets/images/Leia_Organa.jpg";
import obiWanKenobi from "../assets/images/Obi_Wan_Kenobi.jpg";
import chewie from "../assets/images/Chewie.jpg";
import hanSolo from "../assets/images/Han_Solo.jpg";

const ADD_PLANET = 'ADD-PLANET';
const ADD_PEOPLE = 'ADD-PEOPLE';
const UPDATE_SEARCH_TEXT = 'UPDATE-SEARCH-TEXT';


let store = {
    _state: {
        //Логотип
        logo: {
            id: 1,
            img: logoImage,
        },
        //Изначальный текст в поле поиска
        newSearchText: {
            text: 'Поиск',
        },
        //Страница с планетами
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
        //Страница с персонажами
        peoplesPage: {
            /*Массив персонажей*/
            peoples: [
                {id: 1, name: "Люк Скайуокер", img: lukeSkywalker,},
                {id: 2, name: "Дарт Вейдер", img: darthVader,},
                {id: 3, name: "Лея Органа", img: leiaOrgana,},
                {id: 4, name: "Оби-Ван Кеноби", img: obiWanKenobi,},
                {id: 5, name: "Чуи", img: chewie,},
                {id: 6, name: "Хан Соло", img: hanSolo,},
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


    // addPlanet(planetName) {
    //     let newPlanet = {
    //         id: 7,
    //         name: planetName,
    //         img: planetImage,
    //     }
    //     this._state.planetsPage.planets.push(newPlanet)
    //     // _callSubscriber(state);
    // }, //Добавляет планету
    // addPeople(peopleName) {
    //     let newPeople = {
    //         id: 7,
    //         name: peopleName,
    //         img: peoplesImg,
    //     }
    //     this._state.peoplesPage.peoples.push(newPeople)
    //     // _callSubscriber(state);
    // }, //Добавляет персонажа
    // updateSearchText(newText) {
    //     this._state.newSearchText.text = newText;
    //     this._callSubscriber(this._state);
    // }, //При написании нового символа в строке поиска обновляет state

    dispatch(action) { // action { type: 'ADD-POST' }
        if (action.type === ADD_PLANET) { //Добавляет планету
            let newPlanet = {
                id: 7,
                //name: this._state.planetsPage.planets[1].name,
                name: action.name,
                img: planetImage,
            }
            this._state.planetsPage.planets.push(newPlanet)
            // _callSubscriber(state);
        } else {
            if (action.type === ADD_PEOPLE) { //Добавляет персонажа
                let newPeople = {
                    id: 7,
                    //name: this._state.peoplesPage.peoples[1].name,
                    name: action.name,
                    img: peoplesImg,
                }
                this._state.peoplesPage.peoples.push(newPeople)
                // _callSubscriber(state);
            } else {
                if (action.type === UPDATE_SEARCH_TEXT) { //При написании нового символа в строке поиска обновляет state
                    this._state.newSearchText.text = action.newText;
                    this._callSubscriber(this._state);
                }
            }
        }
    },
}

//Фильтрует массив и отдает нужный объект
// export const SearchText = (props) => {
//     let comparisonFunction = (element) => {
//         let filterText = state.newSearchText.text;
//         //Посимвольное сравнение
//         if (element.name.indexOf(filterText) >= 0) {
//             return element.id;
//         }
//     }
//
//     state.id.filter(comparisonFunction(props))
//     rerenderEntireTree(state);
// }

export const addPlanetActionCreator = (newPlanet) => ({ type: ADD_PLANET, name: newPlanet})
export const addPeopleActionCreator = (newPeople) => ({ type: ADD_PEOPLE, name: newPeople})
export const updateSearchTextActionCreator = (text) => ({ type: UPDATE_SEARCH_TEXT, newText: text})

export default store;