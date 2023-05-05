import peoplesImg from "../assets/images/Peoples.jpg"; //default people img
import lukeSkywalker from "../assets/images/Luke_Skywalker.jpg";
import darthVader from "../assets/images/Darth_Vader.jpg";
import leiaOrgana from "../assets/images/Leia_Organa.jpg";
import obiWanKenobi from "../assets/images/Obi_Wan_Kenobi.jpg";
import chewie from "../assets/images/Chewie.jpg";
import hanSolo from "../assets/images/Han_Solo.jpg";
import {peoplesAPI} from "../api/api";

const ADD_PEOPLE = 'ADD-PEOPLE';
const SET_PEOPLES = 'SET-PEOPLES';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_PEOPLES_COUNT = 'SET-TOTAL-PEOPLES-COUNT';
const SET_PAGE_SIZE = 'SET-PAGE-SIZE';
const TOGGLE_PRELOADER = 'TOGGLE-PRELOADER';
const TOGGLE_DISABEL = 'TOGGLE-DISABEL';
const SET_HOMEWORLD = 'SET-HOMEWORLD';
const SET_FILMS = 'SET-FILMS';
const DEL_FILMS = 'DEL-FILMS';
const SET_VEHICLES = 'SET-VEHICLES';
const SET_STARSHIPS = 'SET-STARSHIPS';

let initialState = {
    totalPeoplesCount: 0,
    pageSize: 0,
    currentPage: 1,
    peoples: [],
    isFetching: false,
    fetchingToggleDisable: false,
//Информация модального окна
    homeworld: ["Неизвестно"],
    films: [],
    vehicles: [],
    starships: [],
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
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.size
            };
        case TOGGLE_PRELOADER:
            return {
                ...state,
                isFetching: action.toggle
            };
        case TOGGLE_DISABEL:
            return {
                ...state,
                fetchingToggleDisable: action.toggle
            };
        case SET_HOMEWORLD:
            return {
                ...state,
                homeworld: action.homeworld
            };
        case SET_FILMS:
            return {
                ...state,
                films: [...state.films, ...action.films]
            };
        case DEL_FILMS:
            return {
                ...state,
                films: action.films
            };
        case SET_VEHICLES:
            return {
                ...state,
                vehicles: [...action.vehicles]
            };
        case SET_STARSHIPS:
            return {
                ...state,
                starships: [...action.starships]
            };
        default:
            return state;
    }
}
//Санка получения списка персонажей
export const getPeoplesThunk = (currentPage) => {
    return (dispatch) => {
        dispatch(togglePreloader(true));
        peoplesAPI.getPeoples(currentPage).then(data => {
            dispatch(togglePreloader(false));
            dispatch(setPeoples(data.results));
        });
    }
}
//Санка нумерации страницы
export const getPeoplesPaginationThunk = () => {
    return (dispatch) => {
        peoplesAPI.getPeoplesListInfo().then(data => {
            dispatch(setTotalPageSize(data.results.length));
            dispatch(setTotalPeoplesCount(data.count));
        });
    }
}

//Санки информации персонажей
export const getPeoplesHomeworld = (planet) => {
    return (dispatch) => {
        peoplesAPI.getHomeworld(planet).then(data => {
            dispatch(setPeoplesHomeworld(data.name))
        });
    }
}
export const getPeoplesFilms = (films) => {
    return (dispatch) => {
        dispatch(delPeoplesFilms(" "));
        films.map(e => peoplesAPI.getFilms(e).then(data => {
            dispatch(setPeoplesFilms(e !== films[films.length-1] ? `${data.title}, ` :  `${data.title}.`))
        }));

    }
}
export const getPeoplesVehicles = (vehicles) => {
    return (dispatch) => {
        peoplesAPI.getVehicles(vehicles).then(data => {
            dispatch(setPeoplesVehicles(data.name))
        });
    }
}
export const getPeoplesStarships = (starships) => {
    return (dispatch) => {
        peoplesAPI.getStarships(starships).then(data => {
            dispatch(setPeoplesStarships(data.name))
        });
    }
}

export const addPeople = () => ({type: ADD_PEOPLE, name: 'Эвок'})
export const setPeoples = (peoples) => ({type: SET_PEOPLES, peoples})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalPeoplesCount = (totalCount) => ({type: SET_TOTAL_PEOPLES_COUNT, totalCount})
export const setTotalPageSize = (size) => ({type: SET_PAGE_SIZE, size})
export const togglePreloader = (toggle) => ({type: TOGGLE_PRELOADER, toggle})
export const setToggleDisable = (toggle) => ({type: TOGGLE_DISABEL, toggle})
export const setPeoplesHomeworld = (homeworld) => ({type: SET_HOMEWORLD, homeworld})
export const setPeoplesFilms = (films) => ({type: SET_FILMS, films})
export const delPeoplesFilms = (films) => ({type: DEL_FILMS, films})
export const setPeoplesVehicles = (vehicles) => ({type: SET_VEHICLES, vehicles})
export const setPeoplesStarships = (starships) => ({type: SET_STARSHIPS, starships})
export default peoplesPageReducer;