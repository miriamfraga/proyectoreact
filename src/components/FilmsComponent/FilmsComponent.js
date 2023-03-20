import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './FilmsComponent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {getFilms} from '../../store/films/actions'
const FilmsComponent = () => { 

  const dispatch = useDispatch()
  const {films, loadingFilms} = useSelector((state)=> state.FilmsReducer)
  useEffect(()=>{
    dispatch(getFilms())
  }, [])
if(loadingFilms){
  return(
    "Loading..."
  )
}
  return (
  <div className={styles.FilmsComponent}>

{films.map((film,index)=>{
  return (
    <div key={index}>
    {film.map(f=>{
     return(  <div key={f.id}>
        <h1 > id:{f.id}</h1>
        <h1>titulo:{f.original_title}</h1>
        <h1>titulo:{f.release_date}</h1>
        <h3>reseña:{f.overview}</h3>
        <img src={f.backdrop_path} alt={f.title}></img>
        <img src={f.poster_path} alt={f.title}></img>
        <h3>popularity:{f.popularity}</h3>
        {f.genre_ids.map((x,index)=>{
return (
  <ul key={index}>
  <li> géneros id:{x}</li>
  
  
  
  </ul>
)
})}

      </div>)
    })}
   </div>
    
  )
})}
   
  </div>)
};

FilmsComponent.propTypes = {};

FilmsComponent.defaultProps = {};

export default FilmsComponent;
