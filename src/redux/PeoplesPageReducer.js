import peoplesImg from "../assets/images/Peoples.jpg";

const ADD_PEOPLE = 'ADD-PEOPLE';

const peoplesPageReducer = (state, action) => {
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