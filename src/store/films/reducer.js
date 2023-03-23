import { GET_FILMS, GET_FILMS_OK, GET_FILMS_FAIL,
GET_FILMS_GENRE, GET_FILMS_GENRE_OK, GET_FILMS_GENRE_FAIL,
GET_DOC, GET_DOC_OK, GET_DOC_FAIL,
GET_POPULAR_FILMS,GET_POPULAR_FILMS_OK,GET_POPULAR_FILMS_FAIL
} from "./actionTypes";

const initialState ={
    films: [], 
    genres: [],
    docs: [],
    loadingFilms: false,
    loadingGenres: false,
    loadingDocs: false,
}

 
export default function FilmsReducer(state = initialState, action){

    switch(action.type){
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
            default:
                break
    }
return state

       
}