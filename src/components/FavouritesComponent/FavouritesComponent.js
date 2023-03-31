import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import  './FavouritesComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getDb } from '../../store/favourites/actions';

const FavouritesComponent = () => { 

// const {favouriteFilm, watchLaterFilm} = useSelector((state)=>state.FavouriteReducer);

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
      <div>
        <h2>titulo:{list.original_title} </h2>
        {console.log(list.adult, "list")}
        <h1>{list.adult} </h1>
      </div>)
    })}
{console.log(dbList.data, "dbList.dataDDDD")}
  </section>)}
};

FavouritesComponent.propTypes = {};

FavouritesComponent.defaultProps = {};

export default FavouritesComponent;
