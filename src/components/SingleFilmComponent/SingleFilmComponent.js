import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import  './SingleFilmComponent.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const SingleFilmComponent = () => { 

  const {user} = useSelector((state) => state.AuthReducer);
  const {film, loadingSingle}= useSelector((state)=>state.FilmsReducer)
//   const [list, setList] = useState('')

 // FUNCIÓN PARA AÑADIR A FAVORITOS

function addToFavoritesList(film){
  let favorites = []
  favorites.push(film)
  console.log(film, "film")
  console.log(favorites, "favorites")
}

// -- FUNCIÓN PARA VOLVER ATRÁS

 const navigate = useNavigate();
 const goBack = () => {
  navigate(-1);
 }


  const urlImage = "https://image.tmdb.org/t/p/original/";
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
           <img className="section__detail__div__img__bg" src={`${urlImage}${film.backdrop_path}`} alt={film.title}></img>

        <div className='section__detail__first'> 
           <h4 className="section__detail__div__wrapper__popularity">{film.popularity}</h4>
           <img  className="section__detail__div__img__pstr" src={`${urlImage}${film.poster_path}`} alt={film.title}></img>
        </div>
          
           <h1 className="section__detail__div__wrapper__title"> {film.original_title}  </h1>
           <h4 className="section__detail__div__wrapper__ovvw">{film.overview} </h4>
           <h3 className="section__detail__div__wrapper__year">{film.release_date}</h3>

      {/* // -- AQUÍ ESTAN LOS NOMBRES DE LOS GÉNEROS EN UN ARRAY Y SOLO FUNCIONAN UNA VEZ QUE LA PAG SE HA CARGADO-- */}
             {film.genres?.map((genre)=> <div className="div__wrapper__genre" key={genre.id}> 
             <h4 className='div__wrapper__genre__h4' key={genre.id} > { genre.name } </h4> </div> )}
  
  
     {/* { -- METER EL ICONO DE REPRODUCIR EL VÍDEO } */}
          {user && user.id? "" : <button  className="section__detail__div__button__watch"><Link className='section__detail__div__button__watch__link' to="/login">Ver ahora ▷</Link></button>  }
          {user && user.id?  <button  className="section__detail__div__button__watch"><Link className='section__detail__div__button__watch__link' to="/notFound">Ver ahora</Link></button> : ""}   
          <button className="section__detail__div__button__watch" onClick={goBack}> GO BACK</button>
         <button onClick={(e)=>addToFavoritesList(film)} > fav </button>
          </div>

  </section>)
}};

SingleFilmComponent.propTypes = {};

SingleFilmComponent.defaultProps = {};

export default SingleFilmComponent;
