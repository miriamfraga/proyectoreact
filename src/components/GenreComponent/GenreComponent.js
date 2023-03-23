import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './GenreComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getGenreFilms } from '../../store/films/actions';

const GenreComponent = () => { 

  // const dispatch = useDispatch();
  // const {genres, loadingGenres}= useSelector((state)=> state.FilmsReducer)
  // useEffect(()=>{
    // dispatch(getGenreFilms())
  // },[])

  // if(loadingGenres){
  //  return (
    // "Loading..."
  //  )
  // }
  // return(<div>
{/* {genres.map((genre, index)=>{ */}
  {/* return (<div key={index} className="div__wrapper"> */}
    {/* {genre.map((g)=>{ */}
{/* return( */}
  {/* <div  className='div__wrapper__genres' key={g.id}> */}
   {/* <button className='div__wrapper__genres__title'>{g.name} </button>  */}
   {/* {console.log(g.id, g.name)} */}
  {/* </div> */}
{/* ) */}
    {/* })} */}
  {/* </div>) */}
  

// })}

  // </div>)
};

GenreComponent.propTypes = {};

GenreComponent.defaultProps = {};

export default GenreComponent;
