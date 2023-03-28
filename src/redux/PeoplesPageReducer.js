import peoplesImg from "../assets/images/Peoples.jpg";
import lukeSkywalker from "../assets/images/Luke_Skywalker.jpg";
import darthVader from "../assets/images/Darth_Vader.jpg";
import leiaOrgana from "../assets/images/Leia_Organa.jpg";
import obiWanKenobi from "../assets/images/Obi_Wan_Kenobi.jpg";
import chewie from "../assets/images/Chewie.jpg";
import hanSolo from "../assets/images/Han_Solo.jpg";

const ADD_PEOPLE = 'ADD-PEOPLE';

let initialState = {
    /*Массив персонажей*/
    peoples: [
        {id: 1, name: "Люк Скайуокер", img: lukeSkywalker, modal: "Люк Скайуокер модальное окно",},
        {id: 2, name: "Дарт Вейдер", img: darthVader, modal: "Дарт Вейдер модальное окно",},
        {id: 3, name: "Лея Органа", img: leiaOrgana, modal: "Лея Органа модальное окно",},
        {id: 4, name: "Оби-Ван Кеноби", img: obiWanKenobi, modal: "Оби-Ван Кеноби модальное окно",},
        {id: 5, name: "Чуи", img: chewie, modal: "Чуи модальное окно",},
        {id: 6, name: "Хан Соло", img: hanSolo, modal: "Хан Соло модальное окно",},
    ],
};

const peoplesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PEOPLE:
            let newPeople = {
                id: 7,
                name: action.name,
                img: peoplesImg,
                modal: action.name + " модальное окно",
            }
            state.peoples.push(newPeople)
            return state;
        default:
            return state;
    }
}

export const addPeopleActionCreator = (newPeople) => ({type: ADD_PEOPLE, name: newPeople})
export default peoplesPageReducer;