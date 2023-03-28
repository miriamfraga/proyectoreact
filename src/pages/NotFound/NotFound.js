import React from 'react'
import './NotFound.scss';
import medusa0 from '../../assets/images/medusa0.jpeg'
const NotFound = () => {

  return (
    <div className='div__notFound'>
    <h2>Turned into stone.</h2>
    <h1>404</h1>

    <img className="div__notFound__img" src={medusa0} alt="medusa not found"></img>
    </div>
  )

}


export default NotFound
