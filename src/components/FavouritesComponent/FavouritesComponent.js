import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './FavouritesComponent.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const FavouritesComponent = () => { 

const {favouriteFilm, watchLaterFilm} = useSelector((state)=>state.FavouriteReducer);


 return (  <div className={styles.FavouritesComponent}>
   

  </div>)
};

FavouritesComponent.propTypes = {};

FavouritesComponent.defaultProps = {};

export default FavouritesComponent;
