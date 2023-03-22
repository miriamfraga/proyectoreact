import { GET_FILMS, GET_FILMS_OK, GET_FILMS_FAIL, GET_FILMS_GENRE, GET_FILMS_GENRE_OK, GET_FILMS_GENRE_FAIL  } from "./actionTypes";

const initialState ={
    films: [], 
    genres: [],
    loadingFilms: false,
    loadingGenres: false,
    error: { 
        message: ""
    }
}
export default function FilmsReducer(state = initialState, action){

    switch(action.type){
        case GET_FILMS:
            state=   {...state, loadingFilms: true}
            break
        case GET_FILMS_OK:
            state = {...state, loadingFilms:false, films: action.payload}
            break
        case GET_FILMS_FAIL:
            state = {...state, loadingFilms:false, error: {message: action.payload}}
            break   
            case GET_FILMS_GENRE: 
            state = {...state, loadingGenres: true}
            break
            case GET_FILMS_GENRE_OK: 
            state = {...state, loadingGenres:false, genres:action.payload}
            break 
            case GET_FILMS_GENRE_FAIL: 
            state = {...state, loadingGenres:false, error: {message: action.payload}}
            break
            default:
                break
    }
return state
}