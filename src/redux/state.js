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

let rerenderEntireTree = () => {}

let state = {
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
}

//Добавляет персонажа
export const addPeople = (peopleName) => {
    let newPeople = {
        id: 7,
        name: peopleName,
        img: peoplesImg,
    }
    state.peoplesPage.peoples.push(newPeople)
    // rerenderEntireTree(state);
}

//Добавляет планету
export const addPlanet = (planetName) => {
    let newPlanet = {
        id: 7,
        name: planetName,
        img: planetImage,
    }
    state.planetsPage.planets.push(newPlanet)
    // rerenderEntireTree(state);
}

//При написании нового символа в строке поиска обновляет state
export const updateSearchText = (newText) => {
    state.newSearchText.text = newText;
    rerenderEntireTree(state);
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

//Наблюдает за обновленими
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;