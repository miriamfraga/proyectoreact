import { GET_FILMS_GENRE, GET_FILMS_GENRE_OK, GET_FILMS_GENRE_FAIL } from "./actionTypes";


const initialState = {
    genres: [],
    loadingGenres: false,
    error: {
        message: ""
    }

}
export default function GenreFilmsReducer(state = initialState, action){
    switch(action.type){
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