import React from 'react';
import PropTypes from 'prop-types';

/* IMPORT STYLES */
import './NavigationComponent.scss';

/* IMPORT LINK REACT ROUTER */
import { Link } from 'react-router-dom';

/* IMPORT FONTAWESOME */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

// IMPORT REDUX
import { useSelector } from 'react-redux';

const NavigationComponent = () => {

  const {user} = useSelector((state) => state.AuthReducer);
  <FontAwesomeIcon icon={faCircleUser} size="lg" />

  return (
    <nav className='header__main-nav nav'>
      <ul className='main-nav__ul ul'>
        <li className='main-nav__li li'><Link className="main-nav__link link" to='/'>Home</Link></li>
        <li className='main-nav__li li'><Link className="main-nav__link link" to='/films'>Films</Link></li>
        <li className='main-nav__li li'><Link className="main-nav__link link" to='/search'>Search</Link></li>
        <li className='main-nav__li li'><Link className="main-nav__link link" to='/favourites'>Favourites</Link></li>
        <li className='main-nav__li li'><Link className="main-nav__link link" to='/about'>About</Link></li>|
        {user && user.id? "" : <li className='main-nav__li li'><Link className="main-nav__link link" to='/login'>Login</Link></li>}
        {user && user.id? <li className='main-nav__li li'><Link className="main-nav__link link" to='/profile'><FontAwesomeIcon icon={faCircleUser} size="lg" /> Hello, {user.firstName}</Link></li> : ""}
      </ul>
    </nav>
  )
} 

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
