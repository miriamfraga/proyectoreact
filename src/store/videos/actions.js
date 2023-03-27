import axios from "axios";
import { GET_VIDEOS, GET_VIDEOS_OK,GET_VIDEOS_FAIL } from "./actionTypes";


const apiKey = '?api_key=84d794a5b6f706450c3ee085b451575c';
const baseUrl = 'https://api.themoviedb.org/';
/* const videoUrl = '&append_to_response=videos'; */

export function actionGetVideos(videoId){
    return{
        type: GET_VIDEOS,
        payload: videoId
    }
}
export function actionGetVideosOk(videos){
    return{
        type: GET_VIDEOS_OK,
        payload: videos
    }
}
export function actionGetVideosFail(error){
    return{
        type: GET_VIDEOS_FAIL,
        payload: error
    }
}

export function getVideos(movieId){
    return async (dispatch)=>{
        dispatch(actionGetVideos())
        try { 
//   https://api.themoviedb.org/3/movie/4?api_key=84d794a5b6f706450c3ee085b451575c&language=en-US&append_to_response=videos

                const response = await axios.get(`${baseUrl}3/movie/${movieId}/videos${apiKey}&language=en-US`)
                dispatch(actionGetVideosOk(response.data.results[0]))
                console.log(response, "response")

            console.log(response)

        } catch (error) {
            dispatch(actionGetVideosFail(error))
        }

    }
}