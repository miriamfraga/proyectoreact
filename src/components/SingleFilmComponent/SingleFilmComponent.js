import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import  './SingleFilmComponent.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const SingleFilmComponent = () => { 

  const {user} = useSelector((state) => state.AuthReducer);

// -- FUNCIÓN PARA VOLVER ATRÁS

 const navigate = useNavigate();
 const goBack = () => {
  navigate(-1);
 }


  const {film, loadingSingle}= useSelector((state)=>state.FilmsReducer)
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
       
      <div className= "detail__img-back"> 
           <img className="section__detail__div__img__bg" src={`${urlImage}${film.backdrop_path}`} alt={film.title}></img>
      </div>

      <div className='detail__info'> 

           <h4 className="detail__info__popularity">{film.popularity}</h4>
           <img  className="detail__info__pstr" src={`${urlImage}${film.poster_path}`} alt={film.title}></img>
           <h1 className="detail__info__title"> {film.original_title}  </h1>
           <h4 className="detail__info__ovvw">{film.overview} </h4>
           <h3 className="detail__info__year">{film.release_date}</h3>
           {film.genres?.map((genre)=> <div className="div__wrapper__genre" key={genre.id}> 
           <h4 className='div__wrapper__genre__h4' key={genre.id} > { genre.name } </h4> </div> )}
  
       </div>

          {user && user.id? "" : <button  className="section__detail__div__button__watch"><Link className='section__detail__div__button__watch__link' to="/login">Ver ahora</Link></button>  }
          {user && user.id?  <button  className="section__detail__div__button__watch"><Link className='section__detail__div__button__watch__link' to="/notFound">Ver ahora</Link></button> : ""}   
            {/* <button  className="section__detail__div__button__watch"><Link className='section__detail__div__button__watch__link' to="/login">Ver ahora</Link></button>  */}
            {/* <button className="section__detail__div__button__watch">▷</button>   */}
            {/* <button className="section__detail__div__button__watch">*</button>   */}
            <button className="section__detail__div__button__watch" onClick={goBack}> GO BACK</button>

        

  </section>)
}};

SingleFilmComponent.propTypes = {};

SingleFilmComponent.defaultProps = {};

export default SingleFilmComponent;
