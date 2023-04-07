import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './GenreComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetGenre, getGenreFilms } from '../../store/films/actions';

const GenreComponent = () => { 

  const dispatch = useDispatch();
  const {genres, loadingGenres}= useSelector((state)=> state.FilmsReducer)
  
  const [gender, setGender] = useState('') 
 function selectGenre(){
  dispatch(getGenreFilms(gender))
  setGender('')
 }

  useEffect(()=>{
    dispatch(getGenreFilms())
  },[])

  if(loadingGenres){
   return (
    "Loading..."
   )
  }else{ 
  return( <div>

   <select>
       {genres.map((genre, index)=>{
         return (
            <option  value={gender} onChange={e=>setGender(e.target.value)} onMouseEnter={selectGenre} key={index}>{genre.name}{genre.id}  </option>

)
 })}

   </select>
   </div>)
}};

GenreComponent.propTypes = {};

GenreComponent.defaultProps = {};

export default GenreComponent;
