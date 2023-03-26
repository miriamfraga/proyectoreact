// IMPORT ACTIONS
import { GET_FILMS, GET_FILMS_OK, GET_FILMS_FAIL,
         GET_FILMS_GENRE, GET_FILMS_GENRE_OK, GET_FILMS_GENRE_FAIL,
         GET_POPULAR_FILMS, GET_POPULAR_FILMS_OK, GET_POPULAR_FILMS_FAIL,
         GET_DOC, GET_DOC_OK, GET_DOC_FAIL,
         GET_ROMANCE_FILMS, GET_ROMANCE_FILMS_OK, GET_ROMANCE_FILMS_FAIL,
         GET_SINGLE_FILM, GET_SINGLE_FILM_OK, GET_SINGLE_FILM_FAIL}
         from "./actionTypes";
         
// IMPORT AXIOS         
import axios from "axios";

//VARIABLES CON DATA INFO DE LA API
const apiKey = '?api_key=84d794a5b6f706450c3ee085b451575c';
const baseUrl = 'https://api.themoviedb.org/';


/* GET FILMS */
export function actionGetFilms(){
    return {
        type: GET_FILMS
    }
}

export function actionGetFilmsOk(films){
    return {
        type: GET_FILMS_OK,
        payload: films
    }
}

export function actionGetFilmsFail(error){
    return {
        type: GET_FILMS_FAIL,
        payload: error
    }
}

/* GET GENRES */
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

/* GET DOCS */
export function actionGetFilmsDoc(){
    return {
        type: GET_DOC
    }
}

export function actionGetFilmsDocOk(docs){
    return {
        type:GET_DOC_OK,
        payload: docs
    }
}

export function actionGetFilmsDocFail(error){
    return {
        type: GET_DOC_FAIL,
        payload: error
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

/* GET ROMANCE FILMS */
export function actionGetRomanceFilms(){
    return {
        type: GET_ROMANCE_FILMS
    }
}

export function actionGetRomanceFilmsOk(romanceFilms){
    return {
        type: GET_ROMANCE_FILMS_OK,
        payload: romanceFilms
    }
}

export function actionGetRomanceFilmsFail(error){
    return {
        type: GET_ROMANCE_FILMS_FAIL,
        payload: error
    }
}

/* GET SINGLE FILMS */
export function actionGetSingleFilm(filmId){
    return {
        type: GET_SINGLE_FILM,
        payload: filmId
    }
}

export function actionGetSingleFilmOK(film){
    return {
        type: GET_SINGLE_FILM_OK,
        payload: film
    }
}

export function actionGetSingleFilmFail(error){
    return {
        type: GET_SINGLE_FILM_FAIL,
        payload: error
    }
}

// -- API QUE TRAE LOS NOMBRES DE LOS GÉNEROS -- 

export function getGenreFilms(){
    return async(dispatch)=>{
        dispatch(actionGetGenre())
        try {
            const response = await axios.get(`${baseUrl}3/genre/movie/list${apiKey}`)
             dispatch(actionGetGenreOk(response.data.genres))
            
        } catch (error) {
            dispatch(actionGetGenreFail)
        }
    }
}

// -- API QUE TRAE LAS PELIS DE GÉNERO DRAMA -- 
export function getFilms(){
    return async(dispatch)=>{
       dispatch(actionGetFilms())
       try {
               const response = await axios.get(`${baseUrl}3/discover/movie${apiKey}&with_genres=18`);
               dispatch(actionGetFilmsOk(response.data.results))

            }
        catch (error) {
           dispatch(actionGetFilmsFail(error))
       }
    }
}

// -- API QUE TRAE LAS PELIS DOCUMENTALES -- 
export function getFilmsDoc(){
    return async(dispatch)=>{
       dispatch(actionGetFilmsDoc())
       try {
               const response = await axios.get(`${baseUrl}3/discover/movie${apiKey}&with_genres=99`);
               dispatch(actionGetFilmsDocOk(response.data.results))
               console.log(response.data.results)
            
       } catch (error) {
           dispatch(actionGetFilmsDocFail(error))

       }
      
    }
 }

// -- API QUE TRAE LAS PELIS POPULARES
export function getPopularFilms() {
    return async(dispatch) => {
        dispatch(actionGetPopularFilms())
        try {
            const response = await axios.get(`${baseUrl}3/movie/popular${apiKey}`);
            dispatch(actionGetPopularFilmsOk(response.data.results))
            console.log(response.data.results)
        } catch (error) {
            dispatch(actionGetPopularFilmsFail(error))
        }
     }
}

// API QUE TRAE LAS PELIS ROMÁNTICAS 

export function getRomanceFilms(){
    return async(dispatch)=>{
       dispatch(actionGetRomanceFilms())
       try {
               const response = await axios.get(`${baseUrl}3/discover/movie${apiKey}&with_genres=10749`);
               dispatch(actionGetRomanceFilmsOk(response.data.results))
               console.log(response.data.results)
            
       } catch (error) {
           dispatch(actionGetRomanceFilmsFail(error))

       }
      
    }
 }

 //API QUE TRAE UNA SOLA PELI PARA LOS GÉNEROS DRAMA, ROMANCE Y DOCS

 export function getSingleFilm(filmId){
    return async (dispatch)=>{
        dispatch(actionGetSingleFilm(filmId))
        try {
            const response = await axios.get(`${baseUrl}3/discover/movie/${filmId}${apiKey}`)
            dispatch(actionGetSingleFilmOK(response.data.results))
            //data o data results?
        } catch (error) {
            dispatch(actionGetSingleFilmFail(error))
        }
    }
 }