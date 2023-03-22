import {
    /* GET_FILMS */
    GET_FILMS,
    GET_FILMS_OK,
    GET_FILMS_FAIL,

    /* GET_POPULAR FILMS */
    GET_POPULAR_FILMS,
    GET_POPULAR_FILMS_OK,
    GET_POPULAR_FILMS_FAIL

} from "./actionTypes";

const initialState ={
    films: [], 
    loadingFilms: false,
    error: { 
        message: ""
    }
}
export default function FilmsReducer(state = initialState, action){
    switch(action.type) {
        case GET_FILMS:
            state = {...state, loadingFilms: true}
            break

        case GET_FILMS_OK:
            state = {...state, loadingFilms:false, films: action.payload}
            break

        case GET_FILMS_FAIL:
            state = {...state, loadingFilms:false, error: {message: action.payload}}
            break
           
        case GET_POPULAR_FILMS:
            state = {...state, loadingFilms: true}
            break

        case GET_POPULAR_FILMS_OK:
            state = {...state, loadingFilms:false, films: action.payload}
            break

        case GET_POPULAR_FILMS_FAIL:
            state = {...state, loadingFilms:false, error: {message: action.payload}}
            break
             
        default:
            break
    }
    return state
}