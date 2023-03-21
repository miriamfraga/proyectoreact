import React from 'react';
import PropTypes from 'prop-types';

/* IMPORT STYLES */
import styles from './FilmsComponent.scss';

/* IMPORT USEDISPATCH USEEFFECT USESELECTOR */
import { useDispatch, useEffect, useSelector } from 'react-redux';

/* IMPORT GETFILMS */
import {getFilms} from '../../store/films/actions';

const FilmsComponent = () => { 
  
  const dispatch = useDispatch()
  const {films, loadingFilms} = useSelector((state)=> state.FilmsReducer)
  useEffect(()=>{
    dispatch(getFilms())
  }, [])
 return <div className={styles.FilmsComponent}>
    
  </div>
};

FilmsComponent.propTypes = {};

FilmsComponent.defaultProps = {};

export default FilmsComponent;
