import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/* IMPORT STYLES */
import './FilmsComponent.scss';

/* IMPORT USEDISPATCH USESELECTOR */
import { useDispatch, useSelector } from 'react-redux';

/* IMPORT GETFILMS */
import { getFilms } from '../../store/films/actions';

const FilmsComponent = () => { 
  
  const dispatch = useDispatch()
  const {films, loadingFilms} = useSelector((state)=> state.FilmsReducer)

  useEffect(()=>{
    dispatch(getFilms())
  }, [])

  return (
    <div></div>
  )
}

FilmsComponent.propTypes = {};

FilmsComponent.defaultProps = {};

export default FilmsComponent;
