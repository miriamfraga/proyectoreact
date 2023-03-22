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

/* IMPORT AXIOS */
import axios from "axios";


/* GET FILMS */
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
    return async(dispatch) => {
        dispatch(actionGetFilms())
        try {
            const films = [];
            for (let i=1; i<20; i++){
                const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=84d794a5b6f706450c3ee085b451575c&page=${i}`);
                films.push(response.data.results)
                console.log(response.data.page,"response.data")
            }
            dispatch(actionGetFilmsOk(films))
            // console.log(response.data)
        } catch (error) {
            dispatch(actionGetFilmsFail(error))
        }
     }
}

/* GET POPULAR FILMS */

export function actionGetPopularFilms(){
    return {
        type: GET_POPULAR_FILMS
    }
}

export function actionGetPopularFilmsOk(popularFilms){
    return {
        type: GET_POPULAR_FILMS_OK,
        payload: popularFilms
    }
}

export function actionGetPopularFilmsFail(error){
    return {
        type: GET_POPULAR_FILMS_FAIL,
        payload: error
    }
}

export function getPopularFilms() {
    return async(dispatch) => {
        dispatch(actionGetPopularFilms())
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=84d794a5b6f706450c3ee085b451575c`);
            dispatch(actionGetPopularFilmsOk(response.data.results))
        } catch (error) {
            dispatch(actionGetPopularFilmsFail(error))
        }
     }
}