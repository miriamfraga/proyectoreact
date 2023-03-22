import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import  './FilmsComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import {getFilms} from '../../store/films/actions';
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
 const urlImage = "https://image.tmdb.org/t/p/w500/"
  return (
  <section className="div__section">
{/* --ANOTACIONES SOBRE OTROS DATOS EXTRAÍDOS EN NOTES-- */}
{films.map((film,index)=>{

  return (
   
    <ul key={index} className="div__section__ul">
    {film.map(f=>{
      
     return(  <li key={f.id} className="div__section__ul__li">

          <div className="div__section__ul__li__div">         
               <img className="div__section__ul__li__div__img" src={`${urlImage}${f.poster_path}`}  alt={f.title} ></img>
          </div>
           <section className="section__div"> 
              <div className="section__div__wrapper"> 
                 <h2 className="section__div__wrapper__title">{f.original_title}</h2>
              </div> 
               <div className="section__div__wrapper">
                 <h3 className="section__div__wrapper__title">{f.release_date}</h3>
              </div>
           </section>
        </li>
    
     )
    })}
   </ul>
    
  )
})}
   
  </section>)
};

FilmsComponent.propTypes = {};

FilmsComponent.defaultProps = {};

export default FilmsComponent;
