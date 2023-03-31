

import {
    ADD_FAVOURITES, ADD_FAVOURITES_OK, ADD_FAVOURITES_FAIL,
    WATCH_LATER, WATCH_LATER_OK, WATCH_LATER_FAIL
} from './actionTypes'

import axios from 'axios'

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