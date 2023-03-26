import React from 'react';
import PropTypes from 'prop-types';

/* IMPORT STYLES */
import './NavigationComponent.scss';

/* IMPORT LINK REACT ROUTER */
import { Link } from 'react-router-dom';

/* IMPORT FONTAWESOME */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const NavigationComponent = () => {
  return (
    <nav className='header__main-nav nav'>
      <ul className='main-nav__ul ul'>
        <li className='main-nav__li li'><Link className="main-nav__link link" to='/'>Home</Link></li>
        <li className='main-nav__li li'><Link className="main-nav__link link" to='/films'>Films</Link></li>
        <li className='main-nav__li li'><Link className="main-nav__link link" to='/series'>Series</Link></li>
        <li className='main-nav__li li'><Link className="main-nav__link link" to='/favourites'>Favourites</Link></li>
        <li className='main-nav__li li'><Link className="main-nav__link link" to='/about'>About</Link></li>|
        <li className='main-nav__li li'><Link className="main-nav__link link" to='/login'><FontAwesomeIcon icon={faCircleUser} size="lg" /></Link></li>
      </ul>
    </nav>
  )
} 

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
