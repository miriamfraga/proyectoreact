import React, { useEffect } from 'react';
import VideoFilmsComponent from '../../components/VideoFilmsComponent/VideoFilmsComponent'
import { getVideos } from '../../store/videos/actions'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

const VideoPage = () => {

  const dispatch = useDispatch()
  const params = useParams()

  useEffect(()=>{
  dispatch(getVideos(params.id))
  },[])

  return (
  <div>
    <VideoFilmsComponent></VideoFilmsComponent>
  </div>
)
}

export default VideoPage
