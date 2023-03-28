import logoImage from "../assets/images/star-wars-logo.jpg";
//Логотип
let initialState = {
    id: 1,
    img: logoImage,
};

const LogoReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_PEOPLE:
        //     let newPeople = {
        //         id: 7,
        //         name: action.name,
        //         img: peoplesImg,
        //         modal: action.name + " модальное окно",
        //     }
        //     state.peoples.push(newPeople)
        //     return state;
        default:
            return state;
    }
}

export default LogoReducer;