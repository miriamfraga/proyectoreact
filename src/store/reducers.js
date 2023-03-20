import { combineReducers } from "redux";
import FilmsReducer from "./films/reducer";

const rootReducer = combineReducers({
    FilmsReducer,
})

export default rootReducer