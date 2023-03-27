import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './VideoFilmsComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getVideos } from '../../store/videos/actions';
/* import Youtube from 'react/youtube'; */

/* IMPORT LINK REACT ROUTER */
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom'

const VideoFilmsComponent = () => { 
  const dispatch = useDispatch()
  const params = useParams()

  const {video, loadingVideos}= useSelector((state)=>state.VideosReducer)

  useEffect(()=>{
    dispatch(getVideos(params.id))
  },[])

  if(loadingVideos){
    return(
      "Loading..."
    )
  }

 return (
  <div>
    {/* <Link className="main-nav__link link" to={`https://www.youtube.com/watch?v=${video.key}`}>Ver ahora</Link> */}

  </div>
  
  )
};

VideoFilmsComponent.propTypes = {};

VideoFilmsComponent.defaultProps = {};

export default VideoFilmsComponent;
