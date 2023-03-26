import { GET_VIDEOS,GET_VIDEOS_OK,GET_VIDEOS_FAIL } from "./actionTypes";

const initialState = {
    videos: {},
    loadingVideos: false, 
    error: {
        message: ""
    }
}

export default function VideosReducer(state = initialState, action){
    switch(action.types){
        case GET_VIDEOS: 
        state = {...state, loadingVideos:true}
        break

        case GET_VIDEOS_OK: 
        state= {...state, loadingVideos:false, videos:action.payload}
        break

        case GET_VIDEOS_FAIL:
        state= {...state, loadingVideos:false, error: {message:action.payload}}
        break

        default:
            break
    }
    return state
}




         
