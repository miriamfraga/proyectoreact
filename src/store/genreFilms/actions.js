import axios from "axios";
import { GET_FILMS_GENRE, GET_FILMS_GENRE_OK, GET_FILMS_GENRE_FAIL } from "./actionTypes";

export function actionGetGenre(){
    return {
        type: GET_FILMS_GENRE
       
         }    
}
export function actionGetGenreOk(genres){
    return {
        type: GET_FILMS_GENRE_OK,
         payload: genres
    }

}
export function actionGetGenreFail(error){
    return {
        type: GET_FILMS_GENRE_FAIL,
        payload: error
    }
       
    
}

export function getGenreFilms(){
    return async(dispatch)=>{
        dispatch(actionGetGenre())
        try {
            const genres = [];
            const response = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=84d794a5b6f706450c3ee085b451575c")
             genres.push(response.data.genres)
             dispatch(actionGetGenreOk(genres))
            
        } catch (error) {
            dispatch(actionGetGenreFail)
        }
    }
}