

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

export const addFavourite(userFavouriteFilm){
    return async (dispatch)=> {
        try {
            dispatch(actionAddFavourites(userFavouriteFilm))
           
            const response = await axios.post(' http://localhost:3000/favourites', userFavouriteFilm)
        dispatch(actionAddFavouritesOk(response.data))
        } catch (error) {
            dispatch(actionAddFavouritesFail(error))
        }
    }
}