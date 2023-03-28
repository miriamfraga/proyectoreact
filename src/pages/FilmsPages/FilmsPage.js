import React from 'react'

/* IMPORT COMPONENTS */
import GenreComponent from '../../components/GenreComponent/GenreComponent';
import AllFilmsComponent from '../../components/AllFilmsComponent/AllFilmsComponent';
import SearcherComponent from '../../components/SearcherComponent/SearcherComponent';
import { useState } from 'react';
const FilmsPage = () => {

  const [showSearcher, setShowSearcher] = useState(true)
  const [showFilms, setShowFilms] = useState(true)
  return (
    <div>
      <h1>FILMS PAGE</h1>
      {/* <GenreComponent></GenreComponent> */}
     {/* {showSearcher ? (<SearcherComponent/>): (<AllFilmsComponent/>)} */}
     {/* {showFilms ? (<AllFilmsComponent/>): (<SearcherComponent/>)} */}
      <SearcherComponent></SearcherComponent>
      <AllFilmsComponent></AllFilmsComponent>

    </div>
  )
}

export default FilmsPage
