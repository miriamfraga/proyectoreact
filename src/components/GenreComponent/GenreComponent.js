import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './GenreComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getGenreFilms } from '../../store/genreFilms/actions';

const GenreComponent = () => { 

  const dispatch = useDispatch();
  const {genres, loadingGenres}= useSelector((state)=> state.GenreFilmsReducer)
  useEffect(()=>{
    dispatch(getGenreFilms())
  },[])

  if(loadingGenres){
   return (
    "Loading..."
   )
  }
  return(<div className="div">
{genres.map((genre, index)=>{
  return (<div key={index}  className='div__genres'>
    {genre.map((g)=>{
return(
  <div key={g.id}>
   <h2>{g.name} </h2> 
   <h3> {g.id}</h3>
  </div>
)
    })}
  </div>)
  

})}

  </div>)
};

GenreComponent.propTypes = {};

GenreComponent.defaultProps = {};

export default GenreComponent;
