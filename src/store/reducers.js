import { combineReducers } from "redux";
import FilmsReducer from "./films/reducer";
import GenreFilmsReducer from "./genreFilms/reducer";
import VideosReducer from './videos/reducer';

const rootReducer = combineReducers({
    FilmsReducer,
    GenreFilmsReducer,
    VideosReducer
})

export default rootReducer