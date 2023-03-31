import {
    ADD_FAVOURITES,ADD_FAVOURITES_OK, ADD_FAVOURITES_FAIL
} from './actionTypes'

const initialState = {
    favouriteFilm: {},
    loadingFavourite: false, 
    error: {
        message: ""
    }
}

export default function FavouriteReducer(state = initialState, action){
    switch(action.type){
         case ADD_FAVOURITES: 
         state = {...state, loadingFavourite: true}
         break
         case ADD_FAVOURITES_OK: 
         state = {...state, loadingFavourite:false, favouriteFilm: action.payload}
         break
         case ADD_FAVOURITES_FAIL: 
         state = {...state, loadingFavourite:false, favouriteFilm: {}, error: {message: action.payload}}
         break

         default:
            break

    }
    return state
}