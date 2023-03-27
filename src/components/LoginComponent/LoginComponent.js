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
    <div>
      <h2>Iniciar sesión</h2>
      <form>
        <div>
        <label htmlFor="username">Usuario:</label>
          <input placeholder='username' type="email" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
        <label htmlFor="password">Contraseña:</label>
          <input placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button onClick={tryLogin} type="submit">Iniciar sesión</button>
      </form>
    </div>
  )
}

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
