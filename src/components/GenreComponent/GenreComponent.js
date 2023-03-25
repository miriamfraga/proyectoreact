import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './GenreComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetSelect, getGenreFilms } from '../../store/films/actions';

const GenreComponent = () => { 


  // CREAR UN ESTADO PARA EL BUSCADOR DE PELÍCULAS
const [searchMovie, setSearchMovie] = useState()
  
  const dispatch = useDispatch();
  const {genres, loadingGenres, selectMovie}= useSelector((state)=> state.FilmsReducer)
  
  // CREAR FUNCIÓN PARA BUSCAR PELÍCULA
  function searcher(){
    dispatch(actionGetSelect(searchMovie))
    setSearchMovie('')
  }

  useEffect(()=>{
    dispatch(getGenreFilms())
  },[])

  if(loadingGenres){
   return (
    "Loading..."
   )
  }
  return( <div>
  // CREAR INPUT Y BINDEAR EL VALOR DE BÚSQUEDA CON LOS NOMBRES DE LAS PELÍCULAS
{/* <input type="text" placeholder="search" onChange={} ></input> */}
  
   <select>
{genres.map((genre, index)=>{
  return (
     <option key={index}>{genre.name}{genre.id}  </option>

)
 })}

   </select>
   </div>)
};

GenreComponent.propTypes = {};

GenreComponent.defaultProps = {};

export default GenreComponent;
