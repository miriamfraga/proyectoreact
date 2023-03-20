import { GET_FILMS, GET_FILMS_OK, GET_FILMS_FAIL } from "./actionTypes";
import axios from "axios";


export function actionGetFilms(){
    return{
        type: GET_FILMS
        
    }
}
export function actionGetFilmsOk(films){
    return{
        type: GET_FILMS_OK,
        payload: films
    }
}
export function actionGetFilmsFail(error){
    return{
        type: GET_FILMS_FAIL,
        payload: error
    }
}

export function getFilms(){
     return async(dispatch)=>{
        dispatch(actionGetFilms())
        try {
            // const films = [];
            const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=84d794a5b6f706450c3ee085b451575c');
            // films.push(response.data)
            dispatch(actionGetFilmsOk(response.data))
        } catch (error) {
            dispatch(actionGetFilmsFail(error))
        }
     }
}