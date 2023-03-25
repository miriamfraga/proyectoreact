import { GET_FILMS, GET_FILMS_OK, GET_FILMS_FAIL,
GET_FILMS_GENRE, GET_FILMS_GENRE_OK, GET_FILMS_GENRE_FAIL,
GET_DOC, GET_DOC_OK, GET_DOC_FAIL,
GET_POPULAR_FILMS,GET_POPULAR_FILMS_OK,GET_POPULAR_FILMS_FAIL,
GET_ROMANCE_FILMS, GET_ROMANCE_FILMS_OK, GET_ROMANCE_FILMS_FAIL, 
GET_SINGLE_FILM, GET_SINGLE_FILM_OK, GET_SINGLE_FILM_FAIL, 
GET_ALL_FILMS, GET_ALL_FILMS_OK, GET_ALL_FILMS_FAIL,
GET_SELECT, GET_SELECT_OK, GET_SELECT_FAIL
} from "./actionTypes";

const initialState ={
    films: [], 
    romanceFilms: [],
    genres: [],
    docs: [],
    film: {},
    selectMovie: [],
    loadingSelect: false,
    loadingFilms: false,
    loadingGenres: false,
    loadingDocs: false,
    loadingRomanceFilms: false,
    loadingSingle: false,

}

 
export default function FilmsReducer(state = initialState, action){

    switch(action.type){

            case GET_ALL_FILMS: 
            state ={...state, loadingFilms:true}
            break
            case GET_ALL_FILMS_OK: 
            state ={...state, loadingFilms: false, films:action.payload}
            break
            case GET_ALL_FILMS_FAIL: 
            state ={...state, loadingFilms: false, error:{message:action.payload}}
            break
            case GET_FILMS:
            state=   {...state, loadingFilms: true}
            break
            case GET_FILMS_OK:
            state = {...state, loadingFilms:false, films: action.payload}
            break
            case GET_FILMS_FAIL:
            state = {...state, loadingFilms:false, error: {message: action.payload}}
            break   
            case GET_FILMS_GENRE: 
            state = {...state, loadingGenres: true}
            break
            case GET_FILMS_GENRE_OK: 
            state = {...state, loadingGenres:false, genres:action.payload}
            break 
            case GET_FILMS_GENRE_FAIL: 
            state = {...state, loadingGenres:false, error: {message: action.payload}}
            break
            case GET_DOC:
            state = {...state, loadingDocs:true}
            break
            case GET_DOC_OK:
            state = {...state, loadingDocs:false, docs:action.payload}
            break
            case GET_DOC_FAIL:
            state = {...state, loadingDocs:false, error: {message: action.payload}}
            break
            case GET_POPULAR_FILMS:
            state = {...state, loadingFilms: true}
            break
            case GET_POPULAR_FILMS_OK:
            state = {...state, loadingFilms:false, films: action.payload}
            break
            case GET_POPULAR_FILMS_FAIL:
            state = {...state, loadingFilms:false, error: {message: action.payload}}
            break
            case GET_ROMANCE_FILMS:
            state ={...state, loadingRomanceFilms: true}
            break
            case GET_ROMANCE_FILMS_OK:
            state ={...state, loadingRomanceFilms:false, romanceFilms: action.payload}
            break
            case GET_ROMANCE_FILMS_FAIL:
            state ={...state, loadingRomanceFilms:false, error: {message: action.payload}}
            break
            case GET_SINGLE_FILM:
            state = {...state, loadingSingle:true}
            break
            case GET_SINGLE_FILM_OK:
            state = {...state, loadingSingle:false,  film:action.payload}
            break
            case GET_SINGLE_FILM_FAIL:
            state = {...state, loadingSingle:false, film: {}, error: {message:action.payload}}
            break
            case GET_SELECT:
            state= {...state, loadingSelect:true}
            break
            case GET_SELECT_OK:
            state= {...state, loadingSelect:false, selectMovie: action.payload}
            break
            case GET_SELECT_FAIL:
            state= {...state, loadingSelect:false, selectMovie: [], error:{message: action.payload}}
            break


            
            default:
                break
    }
return state

       
}