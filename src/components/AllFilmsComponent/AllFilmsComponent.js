import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './AllFilmsComponent.scss';
import { useDispatch } from 'react-redux';
import { getAll } from '../../store/films/actions';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AllFilmsComponent = () => { 

  
  const dispatch  = useDispatch()
  const {films,loadingFilms}= useSelector((state)=>state.FilmsReducer)
  const urlImage = "https://image.tmdb.org/t/p/w500/"

  useEffect(()=>{
    dispatch(getAll())
  },[])

  // -- MIENTRAS DURA EL PROCESO DE CARGA , AÑADO ELSE PARA QUE ENTONCES RETORNE EL CONTENIDO--
  if(loadingFilms){
    return(
      <p> 
      "Loading..."
      </p>
    )
    
  }else {

/** --DOBLE MAPEO PARA UNIR PELÍCULAS DE DIFERENTES GÉNEROS DE UNA SOLA VEZ*/

 return( 
  <section className='section__wrapper'>
    {films?.map((array)=> 
      <div key={array.id} className='wrapper'> 
        {array?.map((film)=>  
          <div key={film.id} className='section__wrapper__div'>
            <div className='overlay'>
              <Link to={`/film/${film.id}`}> <img className="section__wrapper__div__img" src={`${urlImage}${film.poster_path}`}  alt={film.title}></img></Link>
            </div>
            <div className='section__wrapper__div__title'>
              <h4 className='section__wrapper__div__title__h4'>{film.title}</h4>
            </div>
          </div>)}
      </div>)}
  </section>)
}};

AllFilmsComponent.propTypes = {};

AllFilmsComponent.defaultProps = {};

export default AllFilmsComponent;
