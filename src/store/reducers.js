import { combineReducers } from "redux";
import FilmsReducer from "./films/reducer";
import GenreFilmsReducer from "./genreFilms/reducer";

const rootReducer = combineReducers({
    FilmsReducer,
    GenreFilmsReducer
})

export default rootReducer