import axios from "axios";
import { GET_VIDEOS, GET_VIDEOS_OK,GET_VIDEOS_FAIL } from "./actionTypes";

export function actionGetVideos(){
    return{
        type: GET_VIDEOS
        
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

export function getVideos(){
    return async (dispatch)=>{
        dispatch(actionGetVideos())
        try {
            const videos = [];
            for (let i=0; i<20; i++){
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${i}/videos?api_key=84d794a5b6f706450c3ee085b451575c&append_to_response=videos`)
                 videos.push(response.data.results)
                 console.log(response.data)
            }
            dispatch(actionGetVideosOk(videos))
        } catch (error) {
            dispatch(actionGetVideosFail(error))
        }

    }
}