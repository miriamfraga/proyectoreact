import React from 'react';
import PropTypes from 'prop-types';
import  './SingleFilmComponent.scss';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFavourite } from '../../store/favourites/actions';
import { watchLater } from '../../store/favourites/actions';

// IMPORT FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock,faThumbsUp, faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const SingleFilmComponent = () => { 

const {user} = useSelector((state) => state.AuthReducer);
const {film, loadingSingle}= useSelector((state)=>state.FilmsReducer);

// IMPORTO LA FAVOURITE FILM
// const {favouriteFilm, watchLaterFilm} = useSelector((state)=>state.FavouriteReducer);

// 
// CREO UN ESTADO PARA SETEAR EL VALOR DE LA PELI FAV CADA VEZ
const [filmFav, setFilmFav] = useState({})
const [filmLater, setFilmLater] = useState({})


// FUNCIÓN PARA VOLVER UNA PAG ATRÁS
const navigate = useNavigate();
const goBack = () => {
 navigate(-1);
}
const dispatch = useDispatch();

// CON ESTA FUNCIÓN CAPTURO EL VALOR DEL EVENTO Y DISPARO CON EL CLICK DEL BOTÓN LA FUNCIÓN QUE VA A METERLA EN EL JSON DE FAVORITAS

const addFav = (e) => {
  dispatch(addFavourite(e));

}
// ESTA FUNCIÓN CAPTURA EL VALOR DEL EVENTO Y DISPARA CON EL BOTÓN LA FUNCIÓN DE AÑADIR A VER MÁS TARDE
const tryWatchLater = (e)=>{
  dispatch(watchLater(e));
}

// -- FUNCIÓN PARA REDIRECCIONAR A FAVORITOS
// if (favouriteFilm && favouriteFilm.id){
  // return (<Navigate to="/favourites" replace></Navigate>)
// }
// if (watchLaterFilm && watchLaterFilm.id){
  // return (<Navigate to="/favourites" replace></Navigate>)
// }

  const urlImage = "https://image.tmdb.org/t/p/original/";
  if(loadingSingle){
    return (
      <p>"Loading..."</p>
    )
  }else {



  
  return(<section className="section__detail">
        <div className='section__detail__div'>
           <img className="section__detail__div__img__bg" src={`${urlImage}${film.backdrop_path}`} alt={film.title}></img>

        <div className='section__detail__first'> 
           <h4 className="section__detail__div__wrapper__popularity">{film.popularity}</h4>
           <img  className="section__detail__div__img__pstr" src={`${urlImage}${film.poster_path}`} alt={film.title}></img>
        </div>

           <button className="section__detail__div__button__watch__fav" onClick={(e)=>addFav(film)}  onChange={(e)=>setFilmFav(e.target.value)} value={filmFav} > <FontAwesomeIcon icon={faThumbsUp} /> </button>
           <h1 className="section__detail__div__wrapper__title"> {film.original_title}  </h1>
           <h4 className="section__detail__div__wrapper__ovvw">{film.overview} </h4>
           <h3 className="section__detail__div__wrapper__year">{film.release_date}</h3>

      {/* // -- AQUÍ ESTAN LOS NOMBRES DE LOS GÉNEROS EN UN ARRAY Y SOLO FUNCIONAN UNA VEZ QUE LA PAG SE HA CARGADO-- */}
             {film.genres?.map((genre)=> <div className="div__wrapper__genre" key={genre.id}> 
             <h4 className='div__wrapper__genre__h4' key={genre.id} > { genre.name } </h4> </div> )}
  
  
     {/* { -- METER EL ICONO DE REPRODUCIR EL VÍDEO } */}
          {user && user.id? "" : <button  className="section__detail__div__button__watch"><Link className='section__detail__div__button__watch__link' to="/login">Ver ahora <FontAwesomeIcon icon={faCirclePlay} /></Link></button>  }
          {user && user.id?  <button  className="section__detail__div__button__watch"><Link className='section__detail__div__button__watch__link' to="/notFound">Ver ahora</Link></button> : ""}   
          <button className="section__detail__div__button__watch" onClick={(e)=>tryWatchLater(film)} onChange={(e)=>setFilmLater(e.target.value)} value={filmLater}> <FontAwesomeIcon icon={faClock} size="lg"/></button>
        
          <button className="section__detail__div__button__watch" onClick={goBack}> GO BACK</button>
          </div>

  </section>)
}};

SingleFilmComponent.propTypes = {};

SingleFilmComponent.defaultProps = {};

export default SingleFilmComponent;
