import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleFilmComponent.scss';
import { useSelector } from 'react-redux';

const SingleFilmComponent = () => { 

  const {film, loadingSingle}= useSelector((state)=>state.FilmsReducer)
  if(loadingSingle){
    return (
      <p>"Loading..."</p>
    )
  }
  const urlImage = "https://image.tmdb.org/t/p/w500/"
  return(<div className={styles.SingleFilmComponent}>
    <div>
      <img src={`${urlImage}${film.poster_path}`} alt={film.title}></img>
      <h2 className="section__div__wrapper__title">{film.original_title}</h2>
      <h2 className="section__div__wrapper__title">{film.release_date}</h2>
      <h3>{film.popularity}</h3>
        
          </div>
  </div>)
};

SingleFilmComponent.propTypes = {};

SingleFilmComponent.defaultProps = {};

export default SingleFilmComponent;
