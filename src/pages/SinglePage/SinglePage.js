import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import SingleFilmComponent from '../../components/SingleFilmComponent/SingleFilmComponent'
import VideoFilmsComponent from '../../components/VideoFilmsComponent/VideoFilmsComponent'
import {getSingleFilm} from '../../store/films/actions'

export default function SinglePage(){


  const dispatch = useDispatch()
  const params = useParams()
  useEffect(()=>{
    dispatch(getSingleFilm(params.id))
  },[])
  return (
    
    <div>
      <SingleFilmComponent></SingleFilmComponent>
      <VideoFilmsComponent></VideoFilmsComponent>
    </div>
  )
}


