import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './GenreComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getGenreFilms } from '../../store/films/actions';

const GenreComponent = () => { 

  const dispatch = useDispatch();
  const {genres, loadingGenres}= useSelector((state)=> state.FilmsReducer)
  useEffect(()=>{
    dispatch(getGenreFilms())
  },[])

  if(loadingGenres){
   return (
    "Loading..."
   )
  }
  return(<select>
{genres.map((genre, index)=>{
  return (
     <option key={index}>{genre.name}{genre.id}  </option>
 
)
  

 })}

   </select>)
};

GenreComponent.propTypes = {};

GenreComponent.defaultProps = {};

export default GenreComponent;
