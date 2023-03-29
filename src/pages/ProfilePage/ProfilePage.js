import React from 'react'
import { useSelector } from "react-redux";
import kateMillet from '../../assets/images/kateMillet.jpeg'
import './ProfilePage.scss';

const ProfilePage = () => {
  
    const {user} = useSelector((state)=> state.AuthReducer);

    return (
      <>
        <div className='div'>
          <h1> Profile page</h1>
          <h2>Hey {user.firstName}! Nice to see you again!</h2>
            <div className='div__info'>
              <div className='div__info__label'>
                <label>Nombre: </label>
                  {user.firstName}
              </div>
              <div className='div__info__label'> 
                <label>Apellidos: </label>
                  {user.lastName}
              </div>
              <div className='div__info__label'>
                <label>Email: </label>
                  {user.email}
              </div>
        </div>
   </div>
   <div className='div__image'>
   <img  className='div__image__user' src={kateMillet} alt="photo user"></img>
   </div>

      </> 
    )
}

export default ProfilePage
