import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './VideoFilmsComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getVideos } from '../../store/videos/actions';

const VideoFilmsComponent = () => { 
  const dispatch = useDispatch()
  const {videos, loadingVideos}= useSelector((state)=>state.VideosReducer)
  useEffect(()=>{
    dispatch(getVideos())
  },[])

  if(loadingVideos){
    return(
      "Loading..."
    )
  }


 return(  <div className="div">
    {videos.map((video,index)=>{
      return( <div> 
        <h1 key={index}>{video}  </h1>
        {console.log(videos)}
        </div>
       )
     
    })}

  </div>)
};

VideoFilmsComponent.propTypes = {};

VideoFilmsComponent.defaultProps = {};

export default VideoFilmsComponent;
