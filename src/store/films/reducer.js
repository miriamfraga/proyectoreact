import { GET_DRAMA_FILMS, GET_DRAMA_FILMS_OK, GET_DRAMA_FILMS_FAIL,
GET_FILMS_GENRE, GET_FILMS_GENRE_OK, GET_FILMS_GENRE_FAIL,
GET_DOC, GET_DOC_OK, GET_DOC_FAIL,
GET_POPULAR_FILMS, GET_POPULAR_FILMS_OK, GET_POPULAR_FILMS_FAIL,
GET_ROMANCE_FILMS, GET_ROMANCE_FILMS_OK, GET_ROMANCE_FILMS_FAIL, 
GET_SINGLE_FILM, GET_SINGLE_FILM_OK, GET_SINGLE_FILM_FAIL, 
GET_ALL_FILMS, GET_ALL_FILMS_OK, GET_ALL_FILMS_FAIL,
GET_SELECT, GET_SELECT_OK, GET_SELECT_FAIL
} from "./actionTypes";

const initialState = {
    films: [], 
    dramaFilms: [],
    romanceFilms: [],
    genres: [],
    popularFilms: [],
    docs: [],
    film: {},
    searched: [],
    loadingDramaFilms: false,
    loadingSelect: false,
    loadingFilms: false,
    loadingGenres: false,
    loadingPopular: false,
    loadingDocs: false,
    loadingRomanceFilms: false,
    loadingSingle: false,
    error: {
        message: "",
      },
}

export default function FilmsReducer(state = initialState, action) {
    switch(action.type) {
        /* CASE GET ALL FILMS */
        case GET_ALL_FILMS: 
            state = {...state, loadingFilms: true}
            break

        case GET_ALL_FILMS_OK: 
            state = {...state, loadingFilms: false, films: action.payload}
            break

        case GET_ALL_FILMS_FAIL: 
            state = {...state, loadingFilms: false, error: {message:action.payload}}
            break
        
        /* CASE GET DRAMA FILMS */
        case GET_DRAMA_FILMS:
            state = {...state, loadingDramaFilms: true}
            break

        case GET_DRAMA_FILMS_OK:
            state = {...state, loadingDramaFilms: false, dramaFilms: action.payload}
            break

        case GET_DRAMA_FILMS_FAIL:
            state = {...state, loadingDramaFilms: false, error: {message: action.payload}}
            break 
        
        /* CASE GET FILMS GENRE */
        case GET_FILMS_GENRE: 
            state = {...state, loadingGenres: true}
            break

        case GET_FILMS_GENRE_OK: 
            state = {...state, loadingGenres: false, genres: action.payload}
            break 

        case GET_FILMS_GENRE_FAIL: 
            state = {...state, loadingGenres: false, error: {message: action.payload}}
            break
        
        /* CASE GET DOC */
        case GET_DOC:
            state = {...state, loadingDocs: true}
            break

        case GET_DOC_OK:
            state = {...state, loadingDocs: false, docs: action.payload}
            break

        case GET_DOC_FAIL:
            state = {...state, loadingDocs: false, error: {message: action.payload}}
            break
        
        /* CASE GET POPULAR FILMS */
        case GET_POPULAR_FILMS:
            state = {...state, loadingPopularFilms: true}
            break

        case GET_POPULAR_FILMS_OK:
            state = {...state, loadingPopularFilms: false, popularFilms: action.payload}
            break

        case GET_POPULAR_FILMS_FAIL:
            state = {...state, loadingPopularFilms: false, error: {message: action.payload}}
            break

        /* CASE GET ROMANCE FILMS */
        case GET_ROMANCE_FILMS:
            state = {...state, loadingRomanceFilms: true}
            break

        case GET_ROMANCE_FILMS_OK:
            state = {...state, loadingRomanceFilms: false, romanceFilms: action.payload}
            break

        case GET_ROMANCE_FILMS_FAIL:
            state = {...state, loadingRomanceFilms: false, error: {message: action.payload}}
            break

        /* CASE GET SINGLE FILM */
        case GET_SINGLE_FILM:
            state = {...state, loadingSingle: true}
            break
        
        case GET_SINGLE_FILM_OK:
            state = {...state, loadingSingle: false,  film: action.payload}
            break

        case GET_SINGLE_FILM_FAIL:
            state = {...state, loadingSingle: false, error: {message:action.payload}}
            break

        /* CASE GET SELECT SEARCHED MOVIE*/
        case GET_SELECT:
            state = {...state, loadingSelect: true}
            break

        case GET_SELECT_OK:
            state = {...state, loadingSelect: false, searched: action.payload}
            break

        case GET_SELECT_FAIL:
            state = {...state, loadingSelect:false, searched: [], error: {message: action.payload}}
            break

        /* DEFAULT */
        default:
            break
    }
    return state     
}