import React from 'react';
import PropTypes from 'prop-types';
import  './SingleFilmComponent.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SingleFilmComponent = () => { 

// -- FUNCIÓN PARA VOLVER ATRÁS

 const navigate = useNavigate();
 const goBack = () => {
  navigate(-1);
 }


  const {film, loadingSingle}= useSelector((state)=>state.FilmsReducer)
  const urlImage = "https://image.tmdb.org/t/p/w500/";
  if(loadingSingle){
    return (
      <p>"Loading..."</p>
    )
  }else {

  

      //    IMAGEN APAISADA DE LA PELI
      //    POPULARIDAD DE LA PELI
      //    IMAGEN POSTER 
      //    TITULO DE LA PELI 
      //    RESEÑA DE LA PELI       
      //    AÑO DE LANZAMIENTO 

  
  return(<section className="section__detail">
        <div className='section__detail__div'>
           <h3 className="section__detail__div__wrapper__title">{film.popularity}</h3>
     
           <img className="section__detail__div__img__bg" src={`${urlImage}${film.poster_path}`} alt={film.title}></img>

           {/* -- IMAGEN APAISADA PARA PONER DE FONDO ?-- */}
           {/* <img  className="section__detail__div__img__pstr" src={`${urlImage}${film.backdrop_path}`} alt={film.title}></img> */}
           <h2 className="section__detail__div__wrapper__title"> {film.original_title}  </h2>
           <h4 className="section__detail__div__wrapper__ovvw">{film.overview} </h4>
           <h3 className="section__detail__div__wrapper__title">{film.release_date}</h3>

      {/* // -- AQUÍ ESTAN LOS NOMBRES DE LOS GÉNEROS EN UN ARRAY Y SOLO FUNCIONAN UNA VEZ QUE LA PAG SE HA CARGADO-- */}
             {film.genres?.map((genre)=> <div key={genre.id}> 
             <h4 key={genre.id} > { genre.name } </h4> </div> )}
  
  
     {/* { -- METER EL ICONO DE REPRODUCIR EL VÍDEO } */}
            <button className="section__detail__div__button__watch">Ver ahora</button> 
            <button className="section__detail__div__button__watch">▷</button>  
            {/* <button className="section__detail__div__button__watch">*</button>   */}
            <button className="section__detail__div__button__watch" onClick={goBack}> GO BACK</button>

          </div>

  </section>)
}};

SingleFilmComponent.propTypes = {};

SingleFilmComponent.defaultProps = {};

export default SingleFilmComponent;
