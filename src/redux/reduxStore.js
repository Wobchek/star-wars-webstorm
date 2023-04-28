import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import planetsPageReducer from "./PlanetsPageReducer";
import peoplesPageReducer from "./PeoplesPageReducer";
import logoReducer from "./LogoReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    planetsPage: planetsPageReducer,
    peoplesPage: peoplesPageReducer,
    logo: logoReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store;

export default store;