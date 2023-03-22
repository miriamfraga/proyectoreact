import { GET_FILMS, GET_FILMS_OK, GET_FILMS_FAIL } from "./actionTypes";
import axios from "axios";
const apiKey = '?api_key=84d794a5b6f706450c3ee085b451575c';
const baseUrl = 'https://api.themoviedb.org/';
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
            const films = [];
             for (let i=1; i<20; i++){
                const response = await axios.get(`${baseUrl}3/discover/movie${apiKey}&page=${i}&with_genres`);
                 films.push(response.data.results)
                //  console.log(response.data.results,"response.data")
             }
            dispatch(actionGetFilmsOk(films))
            // console.log(response.data)
        } catch (error) {
            dispatch(actionGetFilmsFail(error))

        }
       
     }
}
