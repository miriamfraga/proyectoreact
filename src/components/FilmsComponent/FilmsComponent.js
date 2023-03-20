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
{films.map((film)=>{
  
  console.log(film.title)
  
 
 
 
  
  
})}
   
  </div>)
};

FilmsComponent.propTypes = {};

FilmsComponent.defaultProps = {};

export default FilmsComponent;
