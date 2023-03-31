import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './FavouritesComponent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddFavourites } from '../../store/favourites/actions';

const FavouritesComponent = () => { 

const {favouriteFilm} = useSelector((state)=>state.FavouriteReducer);
const [title, setTitle] = useState('');
const [image, setImage] = useState('');

const dispatch = useDispatch();

const tryToAdd = () => {
  dispatch(actionAddFavourites({original_title: title, poster_path: image}));
}


 return (  <div className={styles.FavouritesComponent}>
  
  </div>)
};

FavouritesComponent.propTypes = {};

FavouritesComponent.defaultProps = {};

export default FavouritesComponent;
