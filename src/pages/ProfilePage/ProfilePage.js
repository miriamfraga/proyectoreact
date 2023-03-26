import React from 'react'
import { useSelector } from "react-redux";

const ProfilePage = () => {
  
    const {user} = useSelector((state)=> state.AuthReducer);

    return (
      <>
        <div>
          <h1> Profile page</h1>
            <div>
              <div>
                <label>Nombre: </label>
                  {user.firstName}
              </div>
              <div>
                <label>Apellidos: </label>
                  {user.lastName}
              </div>
              <div>
                <label>Email: </label>
                  {user.email}
              </div>
                <img src={user.image}></img>
            </div>
        </div>
      </> 
    )
}

export default ProfilePage
