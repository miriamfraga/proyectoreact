import React from 'react'
import FavouritesComponent from '../../components/FavouritesComponent/FavouritesComponent'
import WatchLaterComponent from '../../components/WatchLaterComponent/WatchLaterComponent'
const FavouritesPage = () => {

const favourites = "Favourites List";
const watchLater = "Watch Later List"
   return( 
    <div>
     <h1>FAVOURITES PAGE</h1>
    <h2> {favourites} </h2>
    <FavouritesComponent></FavouritesComponent>
    <h2>{watchLater} </h2>
    <WatchLaterComponent></WatchLaterComponent>
    </div> )
  }

export default FavouritesPage
