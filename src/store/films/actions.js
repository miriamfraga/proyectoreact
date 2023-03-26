/* IMPORT ACTIONS */
import {
    GET_FILMS, GET_FILMS_OK, GET_FILMS_FAIL,
    GET_FILMS_GENRE, GET_FILMS_GENRE_OK, GET_FILMS_GENRE_FAIL,
    GET_POPULAR_FILMS,GET_POPULAR_FILMS_OK, GET_POPULAR_FILMS_FAIL,
    GET_DOC, GET_DOC_OK, GET_DOC_FAIL,
    GET_ROMANCE_FILMS, GET_ROMANCE_FILMS_OK, GET_ROMANCE_FILMS_FAIL,
    GET_SINGLE_FILM, GET_SINGLE_FILM_OK, GET_SINGLE_FILM_FAIL, 
    GET_ALL_FILMS,GET_ALL_FILMS_OK,GET_ALL_FILMS_FAIL,
    GET_SELECT, GET_SELECT_OK, GET_SELECT_FAIL
} from "./actionTypes";
         
/* IMPORT AXIOS */         
import axios from "axios";

/* VARIABLES CON DATA INFO DE LA API */
const apiKey = '?api_key=84d794a5b6f706450c3ee085b451575c';
const baseUrl = 'https://api.themoviedb.org/';
const selectMovie = 'search/movie'

/* GET DRAMA FILMS */ 
export function actionGetFilms() {
    return {
        type: GET_FILMS
    }
}

export function actionGetFilmsOk(films) {
    return {
        type: GET_FILMS_OK,
        payload: films
    }
}

export function actionGetFilmsFail(error) {
    return {
        type: GET_FILMS_FAIL,
        payload: error
    }
}

/* GET GENRES */
export function actionGetGenre() {
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

export function actionGetGenreFail(error) {
    return {
        type: GET_FILMS_GENRE_FAIL,
        payload: error
    }   
}

/* GET SELECT GENRE */
export function actionGetSelect(param) {
    return {
        type: GET_SELECT,
        payload: param
    }
}

export function actionGetSelectOk(select) {
    return {
        type: GET_SELECT_OK,
        payload: select
    }
}

export function actionGetSelectFail(error) {
    return {
        type: GET_SELECT_FAIL,
        payload: error
    }
}

/* GET DOCS */
export function actionGetFilmsDoc() {
    return {
        type: GET_DOC 
    }
}

export function actionGetFilmsDocOk(docs) {
    return {
        type: GET_DOC_OK,
        payload: docs
    }
}

export function actionGetFilmsDocFail(error) {
    return {
        type: GET_DOC_FAIL,
        payload:error
    }
}

/* GET POPULAR FILMS */
export function actionGetPopularFilms() {
    return {
        type: GET_POPULAR_FILMS
    }
}

export function actionGetPopularFilmsOk(popularFilms) {
    return {
        type: GET_POPULAR_FILMS_OK,
        payload: popularFilms
    }
}

export function actionGetPopularFilmsFail(error) {
    return {
        type: GET_POPULAR_FILMS_FAIL,
        payload: error
    }
}

/* GET ROMANCE FILMS */
export function actionGetRomanceFilms() {
    return {
        type: GET_ROMANCE_FILMS
    }
}

export function actionGetRomanceFilmsOk(romanceFilms) {
    return {
        type: GET_ROMANCE_FILMS_OK,
        payload: romanceFilms
    }
}
export function actionGetRomanceFilmsFail(error) {
    return {
        type: GET_ROMANCE_FILMS_FAIL,
        payload:error
    }
}

/* GET ALL FILMS */
export function actionGetAll() {
    return {
        type: GET_ALL_FILMS
    }
}

export function actionGetAllOk(films) {
    return {
        type: GET_ALL_FILMS_OK,
        payload: films
    }
}

export function actionGetAllFail(error) {
    return {
        type: GET_ALL_FILMS_FAIL,
        payload: error
    }
}

/* GET SINGLE FILMS */
export function actionGetSingleFilm(filmId) {
    return {
        type: GET_SINGLE_FILM,
        payload: filmId
        
    }
}

export function actionGetSingleFilmOk(film) {
    return {
        type: GET_SINGLE_FILM_OK,
        payload: film
    }
}

export function actionGetSingleFilmFail(error) {
    return {
        type: GET_SINGLE_FILM_FAIL,
        payload: error
    }
}

/* API QUE TRAE LOS NOMBRES DE LOS GÉNEROS */
export function getGenreFilms() {
    return async(dispatch) => {
        dispatch(actionGetGenre())
        try {
            const response = await axios.get(`${baseUrl}3/genre/movie/list${apiKey}`)
            dispatch(actionGetGenreOk(response.data.genres))
        } catch (error) {
            dispatch(actionGetGenreFail)
        }
    }
}

/* FUNCIÓN PARA BINDEAR EL SELECT */
export function getSelect(selectParam) {
    return async(dispatch) => {
        dispatch(actionGetSelect(selectParam))
        try {
            const response = await axios.get(`${baseUrl}3/${selectMovie}${apiKey}&query${selectParam}`)
            dispatch(actionGetSelectOk(response.data.results))
        } catch (error) {
            dispatch(actionGetSelectFail(error))
        }
    }
}

/* API QUE TRAE TODAS LAS PELIS MEZCLADAS POR GÉNEROS */
export function getAll() {
    return async(dispatch) => {
        dispatch(actionGetAll())
        try {
            const films= []
            const response = await axios.get(`${baseUrl}3/discover/movie${apiKey}&with_genres=10752|99|14&page=3`)
            const response1 = await axios.get(`${baseUrl}3/discover/movie${apiKey}&with_genres=878|10402|37&page=5`)
            const response2 = await axios.get(`${baseUrl}3/discover/movie${apiKey}&with_genres=36|10402|37&page=4`)
            //   films.push(response1.data.results)
              films.push(response1.data.results, response.data.results, response2.data.results)
            dispatch(actionGetAllOk(films))
        } catch (error) {
            dispatch(actionGetAllFail(error))
        }
    }
}


/* API QUE TRAE LAS PELIS DE GÉNERO DRAMA */ 
export function getDramaFilms() {
    return async(dispatch) => {
       dispatch(actionGetFilms())
       try {
            const response = await axios.get(`${baseUrl}3/discover/movie${apiKey}&with_genres=18`);
            dispatch(actionGetFilmsOk(response.data.results))
            console.log(response)
        } catch (error) {
            dispatch(actionGetFilmsFail(error))
        }
    }
}

/* API QUE TRAE LAS PELIS DOCUMENTALES */
export function getFilmsDoc() {
    return async(dispatch) => {
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

/* API QUE TRAE LAS PELIS POPULARES */
export function getPopularFilms() {
    return async(dispatch) => {
        dispatch(actionGetPopularFilms())
        try {
            const response = await axios.get(`${baseUrl}3/movie/popular${apiKey}`);
            dispatch(actionGetPopularFilmsOk(response.data.results))
        } catch (error) {
            dispatch(actionGetPopularFilmsFail(error))
        }
    }
}

/* API QUE TRAE LAS PELIS ROMÁNTICAS  */
export function getRomanceFilms() {
    return async(dispatch) => {
        dispatch(actionGetRomanceFilms())
        try {
            const response = await axios.get(`${baseUrl}3/discover/movie${apiKey}&with_genres=10749`);
            dispatch(actionGetRomanceFilmsOk(response.data.results))
        } catch (error) {
           dispatch(actionGetRomanceFilmsFail(error))
        }
    }
 }

 /* API QUE TRAE UNA SOLA PELI PARA LOS GÉNEROS DRAMA, ROMANCE Y DOCS */
 export function getSingleFilm(filmId) {
    return async (dispatch) => {
        dispatch(actionGetSingleFilm(filmId))
        try {
            const response = await axios.get(`${baseUrl}3/movie/${filmId}${apiKey}`)
            dispatch(actionGetSingleFilmOk(response.data))
            console.log(response.data)
        } catch (error) {
            dispatch(actionGetSingleFilmFail(error))
        }
    }
}