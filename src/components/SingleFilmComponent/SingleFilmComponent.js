import React from 'react';
import PropTypes from 'prop-types';
import  './SingleFilmComponent.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const SingleFilmComponent = () => { 


  const {film, loadingSingle}= useSelector((state)=>state.FilmsReducer)
  if(loadingSingle){
    return (
      <p>"Loading..."</p>
    )
  }

      //  IMAGEN APAISADA DE LA PELI
     //  POPULARIDAD DE LA PELI
     //  IMAGEN POSTER 
     //    TITULO DE LA PELI 
     //   RESEÑA DE LA PELI       
     //   AÑO DE LANZAMIENTO 
  const urlImage = "https://image.tmdb.org/t/p/w500/"
  return(<section className="section__detail">

        <div className='section__detail__div'>
           <h3 className="section__detail__div__wrapper__title">{film.popularity}</h3>
     
           <img className="section__detail__div__img__bg" src={`${urlImage}${film.poster_path}`} alt={film.title}></img>
           <img  className="section__detail__div__img__pstr" src={`${urlImage}${film.backdrop_path}`} alt={film.title}></img>
           <h2 className="section__detail__div__wrapper__title"> {film.original_title}  </h2>
           <h4 className="section__detail__div__wrapper__ovvw">{film.overview} </h4>
           <h3 className="section__detail__div__wrapper__title">{film.release_date}</h3>

      {/* // -- AQUÍ ESTAN LOS NOMBRES DE LOS GÉNEROS EN UN ARRAY -- */}
      {/* {film.genres.map((genre)=> <div key={genre.id}>  */}
      {/* <h4 key={genre.id} > { genre.name } </h4> </div> )} */}
     
  
     {/* { -- METER EL ICONO DE REPRODUCIR EL VÍDEO } */}
      <button className="section__detail__div__button__watch">Ver ahora</button>  <button className="section__detail__div__button__watch">*</button>      <button className="section__detail__div__button__watch">*</button>  
          </div>
  </section>)
};

SingleFilmComponent.propTypes = {};

SingleFilmComponent.defaultProps = {};

export default SingleFilmComponent;
