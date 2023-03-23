import React from 'react'

/* IMPORT STYLES */
import './HeaderComponent.scss';

/* IMPORT COMPONENTS */
import NavigationComponent from '../../components/NavigationComponent/NavigationComponent';

/* IMPORT LOGO */
import logo from '../../assets/images/filmshub-logo.svg';

const HeaderComponent = () => {
  return (
    // START HEADER
    <header className='header'>
      <div className='header-container container'>
        <nav className='header__nav nav'>
          <a className='header-logo__a a' href='/'><img src={logo} className='header__logo img' alt='logo'/></a>
          <NavigationComponent></NavigationComponent>
        </nav>
      </div>
    </header>
    // END HEADER
  )
}

export default HeaderComponent