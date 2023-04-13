import peoplesImg from "../assets/images/Peoples.jpg"; //default people img
import lukeSkywalker from "../assets/images/Luke_Skywalker.jpg";
import darthVader from "../assets/images/Darth_Vader.jpg";
import leiaOrgana from "../assets/images/Leia_Organa.jpg";
import obiWanKenobi from "../assets/images/Obi_Wan_Kenobi.jpg";
import chewie from "../assets/images/Chewie.jpg";
import hanSolo from "../assets/images/Han_Solo.jpg";

const ADD_PEOPLE = 'ADD-PEOPLE';
const SET_PEOPLES = 'SET-PEOPLES';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_PEOPLES_COUNT = 'SET-TOTAL-PEOPLES-COUNT';
const TOGGLE_PRELOADER = 'TOGGLE-PRELOADER';

let initialState = {
    totalPeoplesCount: 0,
    pageSize: 10,
    currentPage: 1,
    /*Массив персонажей*/
    peoples: [],
    isFetching: false,
};

let firstPagePeoples = [
    {id: 1, name: "Люк Скайуокер", img: lukeSkywalker, modal: "Люк Скайуокер модальное окно",},
    {id: 2, name: "Дарт Вейдер", img: darthVader, modal: "Дарт Вейдер модальное окно",},
    {id: 3, name: "Лея Органа", img: leiaOrgana, modal: "Лея Органа модальное окно",},
    {id: 4, name: "Оби-Ван Кеноби", img: obiWanKenobi, modal: "Оби-Ван Кеноби модальное окно",},
    {id: 5, name: "Чуи", img: chewie, modal: "Чуи модальное окно",},
    {id: 6, name: "Хан Соло", img: hanSolo, modal: "Хан Соло модальное окно",},
]

const peoplesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PEOPLE:
            let newPeople = {
                id: 7,
                name: action.name,
                img: peoplesImg,
                modal: action.name + " модальное окно",
            }
            return { // теперь так
                ...state,
                peoples: [...state.peoples, newPeople]
            };
        case SET_PEOPLES:
            // if (state.currentPage === 1 && state.peoples.length === 0) {
            if (state.currentPage === 1) {
                state.peoples = [];
                firstPagePeoples.map(e => state.peoples.push(e))
                return {
                    ...state,
                    peoples: [...state.peoples, ...action.peoples]
                };
            } else {
                return {
                    ...state,
                    peoples: action.peoples
                };
            }
            ;
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_PEOPLES_COUNT:
            return {
                ...state,
                totalPeoplesCount: action.totalCount
            };
            case TOGGLE_PRELOADER:
            return {
                ...state,
                isFetching: action.toggle
            };
        default:
            return state;
    }
}

export const addPeopleAC = (name) => ({type: ADD_PEOPLE, name: name})
export const setPeoplesAC = (peoples) => ({type: SET_PEOPLES, peoples})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalPeoplesCountAC = (totalCount) => ({type: SET_TOTAL_PEOPLES_COUNT, totalCount})
export const TogglePreloaderAC = (toggle) => ({type: TOGGLE_PRELOADER, toggle})
export default peoplesPageReducer;