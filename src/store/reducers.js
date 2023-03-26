/* IMPORT COMBINEREDUCERS */
import { combineReducers } from "redux";

/* IMPORT FILMS REDUCER */
import FilmsReducer from "./films/reducer";

/* IMPORT AUTH REDUCER */
import AuthReducer from './auth/reducer';

/* IMPORT VIDEO REDUCER */
import VideosReducer from './videos/reducer'

const rootReducer = combineReducers({
    FilmsReducer,
    AuthReducer,
    VideosReducer
})

export default rootReducer