import { combineReducers } from "redux";
import FilmsReducer from "./films/reducer";
import VideosReducer from './videos/reducer';

const rootReducer = combineReducers({
    FilmsReducer,
    VideosReducer
})

export default rootReducer