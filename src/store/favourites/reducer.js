import {
    ADD_FAVOURITES,ADD_FAVOURITES_OK, ADD_FAVOURITES_FAIL,
     WATCH_LATER, WATCH_LATER_OK, WATCH_LATER_FAIL
} from './actionTypes'

const initialState = {
    favouriteFilm: {},
    watchLaterFilm: {},
    loadingLater: false,
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
         case WATCH_LATER:
            state = {...state, loadingLater:true}
            break
         case WATCH_LATER_OK:
            state = {...state, loadingLater: false, watchLaterFilm: action.payload }
            break
         case WATCH_LATER_FAIL:
            state = {...state, loadingLater: false, watchLaterFilm: {}, error: {message: action.payload}}
            break

         default:
            break

    }
    return state
}