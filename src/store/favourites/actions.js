

import {
    ADD_FAVOURITES, ADD_FAVOURITES_OK, ADD_FAVOURITES_FAIL
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
            const response = await axios.post(' http://localhost:3000/favourites', userFavouriteFilm)
            console.log(response)
            dispatch(actionAddFavouritesOk(response.data))
            } catch (error) {
                dispatch(actionAddFavouritesFail(error))
            }
    }
}