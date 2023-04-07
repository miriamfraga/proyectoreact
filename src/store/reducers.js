/* IMPORT COMBINEREDUCERS */
import { combineReducers } from "redux";

/* IMPORT FILMS REDUCER */
import FilmsReducer from "./films/reducer";

/* IMPORT AUTH REDUCER */
import AuthReducer from './auth/reducer';

/* IMPORT FAVOURITE REDUCER */
import FavouriteReducer from './favourites/reducer'

const rootReducer = combineReducers({
    FilmsReducer,
    AuthReducer,
    FavouriteReducer
})

export default rootReducer