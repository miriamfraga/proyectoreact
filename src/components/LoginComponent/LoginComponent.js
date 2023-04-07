import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* IMPORT STYLES */
import './LoginComponent.scss';

/* IMPORT USEDISPATCH USESELECTOR */
import { useDispatch, useSelector } from 'react-redux';

/* IMPORT FUNCTION DOLOGIN */
import { doLogin } from '../../store/auth/actions';

/* IMPORT NAVIGATE */
import { Navigate } from 'react-router-dom';

/* IMPORT LOGO */
import logo from '../../assets/images/filmshub-logo-monster.svg';

const LoginComponent = () => {

  const {user} = useSelector((state)=> state.AuthReducer);
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const dispatch = useDispatch();

  const tryLogin = () => {
    // ES IMPORTANTE MANTENER LAS KEYS QUE NOS PIDA LA API
    dispatch(doLogin({ username: username, password: password }));
  }

  if (user && user.id) {
    return(<Navigate to='/profile' replace></Navigate>)
  }

  return (
    <section className='section__login section'>
      <form className='form'>
        <header>
          <h2 className='form__title h2'>Iniciar sesión</h2>
          <img src={logo} className='footer__logo img' alt='logo'/>
        </header>
        <div className="form__container">
          <div className='form__group'>
            <input className='form__input' value={username} placeholder=' ' id='username' type="email" onChange={(e) => setUsername(e.target.value)} required />
            <label className='form__label'>Usuario:</label>
            <span className='form__line'></span>
          </div>
          <div className='form__group'>
            <input className='form__input' value={password} placeholder=' ' id='password' type='password' onChange={(e) => setPassword(e.target.value)} required />
            <label className='form__label'>Contraseña:</label>
            <span className='form__line'></span>
          </div>
         <input className='form__submit' onClick={tryLogin} type="submit"/>
        </div>
      </form>
    </section>
  )
}

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
