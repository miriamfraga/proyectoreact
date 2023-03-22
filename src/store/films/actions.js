import { GET_FILMS, GET_FILMS_OK, GET_FILMS_FAIL, GET_FILMS_GENRE, GET_FILMS_GENRE_OK, GET_FILMS_GENRE_FAIL} from "./actionTypes";
import axios from "axios";
const apiKey = '?api_key=84d794a5b6f706450c3ee085b451575c';
const baseUrl = 'https://api.themoviedb.org/';

export function actionGetFilms(){
    return{
        type: GET_FILMS
        
    }
}
export function actionGetFilmsOk(films){
    return{
        type: GET_FILMS_OK,
        payload: films
    }
}
export function actionGetFilmsFail(error){
    return{
        type: GET_FILMS_FAIL,
        payload: error
    }
}
export function actionGetGenre(){
    return {
        type: GET_FILMS_GENRE
       
         }    
}
export function actionGetGenreOk(genres){
    return {
         type: GET_FILMS_GENRE_OK,
         payload: genres
    }

}
export function actionGetGenreFail(error){
    return {
        type: GET_FILMS_GENRE_FAIL,
        payload: error
    }
       
    
}
// -- API QUE TRAE LOS NOMBRES DE LOS GÉNEROS -- 

export function getGenreFilms(){
    return async(dispatch)=>{
        dispatch(actionGetGenre())
        try {
            const genres = [];
            const response = await axios.get(`${baseUrl}3/genre/movie/list${apiKey}`)
             genres.push(response.data.genres)
             dispatch(actionGetGenreOk(genres))
            //  console.log(response.data)
            
        } catch (error) {
            dispatch(actionGetGenreFail)
        }
    }
}

// -- API QUE TRAE LAS PELIS DE GÉNERO DRAMA -- 
export function getFilms(){
     return async(dispatch)=>{
        dispatch(actionGetFilms())
        try {
            const films = [];
             for (let i=1; i<2; i++){
                const response = await axios.get(`${baseUrl}3/discover/movie${apiKey}&page=${i}&with_genres=18`);
                 films.push(response.data.results)
                //  console.log(response.data.results,"response.data")
             }
            dispatch(actionGetFilmsOk(films))
            console.log(response.data)
        } catch (error) {
            dispatch(actionGetFilmsFail(error))

        }
       
     }
}

// -- API QUE TRAE LAS PELIS DE GÉNERO TV MOVIE -- 
export function getFilmsDoc(){
    return async(dispatch)=>{
       dispatch(actionGetFilms())
       try {
           const films = [];
            for (let i=1; i<2; i++){
               const response = await axios.get(`${baseUrl}3/discover/movie${apiKey}&page=${i}&with_genres=99`);
                films.push(response.data.results)
                console.log(response.data.results,"")
            }
           dispatch(actionGetFilmsOk(films))
           // console.log(response.data)
       } catch (error) {
           dispatch(actionGetFilmsFail(error))

       }
      
    }
}