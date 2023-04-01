import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import  './FavouritesComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getDb } from '../../store/favourites/actions';

const FavouritesComponent = () => { 

// const {favouriteFilm, watchLaterFilm} = useSelector((state)=>state.FavouriteReducer);
const urlImage = "https://image.tmdb.org/t/p/w500/";
const {dbList, loadingList} = useSelector((state)=>state.FavouriteReducer);
const shoot = useDispatch()
useEffect(()=>{
  shoot(getDb())
},[])
if(loadingList){
  return (
    <p> "Loading your lists..." </p>
  )
} else { 

 return (  <section className="section__lists">
    {dbList.data && dbList.data?.map((list)=>{ 
      return( 
      <div className='section__lists__div'>
        {/* <h3 className='section__lists__h3'>titulo:{list.original_title} </h3> */}
        <img className='section__lists__div__img' src={`${urlImage}${list.poster_path}`} alt= {list.original_title}></img>
      
      </div>)
    })}
  </section>)}
};

FavouritesComponent.propTypes = {};

FavouritesComponent.defaultProps = {};

export default FavouritesComponent;
