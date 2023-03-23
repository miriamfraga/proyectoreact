
/* IMPORT COMBINEREDUCERS */
import { combineReducers } from "redux";

/* IMPORT FILMS REDUCER */
import FilmsReducer from "./films/reducer";


/* IMPORT AUTH REDUCER */
import AuthReducer from './auth/reducer';

const rootReducer = combineReducers({
    FilmsReducer,
    AuthReducer

})

export default rootReducer