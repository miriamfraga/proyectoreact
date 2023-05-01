

import {    
    ADD_FAVOURITES, ADD_FAVOURITES_OK, ADD_FAVOURITES_FAIL,
    WATCH_LATER, WATCH_LATER_OK, WATCH_LATER_FAIL,
    GET_DB, GET_DB_OK, GET_DB_FAIL, 
    GET_DBL, GET_DBL_OK, GET_DBL_FAIL, 
 

} from './actionTypes'

import axios from 'axios'

const dbUrl = 'https://backfilmshub.vercel.app/favourites'
const dbUrlLater = 'https://backfilmshub.vercel.app/later '
export function actionAddFavourites(favouriteData){
    return{
        type: ADD_FAVOURITES,
        payload:favouriteData
    }
}
export function actionAddFavouritesOk(favourite){
    return{
        type: ADD_FAVOURITES_OK,
        payload:favourite
    }
}
export function actionAddFavouritesFail(error){
    return{
        type: ADD_FAVOURITES_FAIL,
        payload:error
    }
}

// ESTA FUNCIÓN VA A AÑADIR EN FAVORITOS UNA PELI EN JSON
//userFavouriteFilm es la peli que recibe el click para ser añadida a favoritos
export function addFavourite(userFavouriteFilm) {
    return async (dispatch)=> {
        try {
            dispatch(actionAddFavourites(userFavouriteFilm))
            const response = await axios.post('http://localhost:3000/favourites', userFavouriteFilm)
            console.log(response, "response add fav")
            dispatch(actionAddFavouritesOk(response.data))
            } catch (error) {
                dispatch(actionAddFavouritesFail(error))
            }
    }
}

export function actionWatchLater(laterData){
    return {
        type: WATCH_LATER,
        payload: laterData
    }
}
export function actionWatchLaterOK(laterFilm){
    return {
        type: WATCH_LATER_OK,
        payload: laterFilm
    }
}
export function actionWatchLaterFail(error){
    return {
        type: WATCH_LATER_FAIL,
        payload: error
    }
}

export function watchLater(userWatchLaterFilm){
    return async (dispatch)=> {
        try {
            dispatch(actionWatchLater(userWatchLaterFilm))
            const response = await axios.post('http://localhost:3000/later', userWatchLaterFilm)
            console.log(response, "response ver más tarde")
            dispatch(actionWatchLaterOK(response.data))
        } catch (error) {
            dispatch(actionWatchLaterFail(error))
        }
    }
}


export function actionGetDb(){
    return{
        type: GET_DB
       
    }
}
export function actionGetDbOk(dbList){
    return{
        type: GET_DB_OK,
        payload: dbList
    }
}
export function actionGetDbFail(error){
    return{
        type: GET_DB_FAIL,
        payload:error
    }
}

// ESTA FUNCIÓN VA A PEDIR A LA DB QUE RENDERICE LAS PELIS GUARDADAS  EN FAVORITOS  Y EN VER MÁS TARDE EN JSON
export function getDb(){
    return async (dispatch)=> {
        dispatch(actionGetDb())
        try {
            const response = await axios.get(dbUrl)
            dispatch(actionGetDbOk(response))
            console.log(response.data, "response del get")
        } catch (error) {
            dispatch(actionGetDbFail(error))
        }
    }
}

// ESTA FUNCIÓN PIDE EL RENDERIZADO DE VER MÁS TARDE 
export function actionGetLater(laterData){
    return{
        type: GET_DBL,
        payload:laterData
    }
}
export function actionGetLaterOk(later){
    return{
        type: GET_DBL_OK,
        payload:later
    }
}
export function actionGetLaterFail(error){
    return{
        type: GET_DBL_FAIL,
        payload:error
    }
}

export function getDbl(){
    return async (dispatch)=> {
        dispatch(actionGetLater())
        try {
            const response = await axios.get(dbUrlLater)
            dispatch(actionGetLaterOk(response))
            console.log(response.data, "response del get")
        } catch (error) {
            dispatch(actionGetLaterFail(error))
        }
    }
}
