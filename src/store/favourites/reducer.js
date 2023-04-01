import {
    ADD_FAVOURITES,ADD_FAVOURITES_OK, ADD_FAVOURITES_FAIL,
     WATCH_LATER, WATCH_LATER_OK, WATCH_LATER_FAIL, 
     GET_DB, GET_DB_OK, GET_DB_FAIL,
     GET_DBL, GET_DBL_OK, GET_DBL_FAIL,
} from './actionTypes'

const initialState = {
    favouriteFilm: {},
    watchLaterFilm: {},
    dbList: [],
    dbLaterList: [],
    loadingList: false,
    loadingLaterList: false,
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
         case GET_DB:
            state = {...state, loadingList: true}
            break
         case GET_DB_OK:
            state = {...state, loadingList: false, dbList: action.payload}
            break
         case GET_DB_FAIL:
            state = {...state, loadingList: false, dbList: [], error: {message: action.payload}}
            break
         case GET_DBL:
            state = {...state, loadingLaterList:true}
            break
         case GET_DBL_OK:
            state = {...state, loadingLaterList:false, dbLaterList:action.payload }   
            break  
         case GET_DBL_FAIL:
            state = {...state, loadingLaterList:false, dbLaterList: [], error: {message:action.payload}}
            break

            default:
            break


    }
    return state
}