import React from 'react'

/* IMPORT STYLES */
import './HeaderComponent.scss';

/* IMPORT COMPONENTS */
import NavigationComponent from '../../components/NavigationComponent/NavigationComponent';

/* IMPORT LOGO */
import logo from '../../assets/images/filmshub-logo.svg';

/* IMPORT LINK REACT ROUTER */
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    // START HEADER
    <header className='header'>
      <div className='header-container container'>
        <nav className='header__nav nav'>
          <Link className='header-logo__a a' to='/'><img src={logo} className='header__logo img' alt='logo'/></Link>
          <NavigationComponent></NavigationComponent>
        </nav>
      </div>
    </header>
    // END HEADER
  )
}

export default HeaderComponent