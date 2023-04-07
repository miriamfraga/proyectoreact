import React from 'react'

/* IMPORT STYLES */
import './LoginPage.scss';

/* IMPORT COMPONENTS */
import LoginComponent from '../../components/LoginComponent/LoginComponent';

const LoginPage = () => {
  return (
    <>
      <h1 className='login__h1 h1'>LOGIN PAGE</h1>
      <LoginComponent></LoginComponent>
    </>
  )
}

export default LoginPage
