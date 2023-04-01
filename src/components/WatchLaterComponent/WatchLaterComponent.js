import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './WatchLaterComponent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getDbl } from '../../store/favourites/actions';

const WatchLaterComponent = () => { 

  const urlImage = "https://image.tmdb.org/t/p/w500/";
const {dbLaterList, loadingLater} = useSelector((state)=>state.FavouriteReducer);
const shoot = useDispatch()
useEffect(()=>{
  shoot(getDbl())
},[])
if(loadingLater){
  return (
    <p> "Loading your lists..." </p>
  )
} else { 
 return(  <section className='section__lists'>
      {dbLaterList.data && dbLaterList.data?.map((list)=>{ 
    return( 
    <div className='section__lists__div'>
      {/* <h3 className='section__lists__h3'>titulo:{list.original_title}
      {/* //carta detalle para cada peli */}
     <img className='section__lists__div__img' src={`${urlImage}${list.poster_path}`} alt= {list.original_title}></img>
    
    </div>)
  })}
  </section>)}
};

WatchLaterComponent.propTypes = {};

WatchLaterComponent.defaultProps = {};

export default WatchLaterComponent;
