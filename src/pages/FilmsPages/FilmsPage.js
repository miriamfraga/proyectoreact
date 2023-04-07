import React from 'react'

/* IMPORT COMPONENTS */
import AllFilmsComponent from '../../components/AllFilmsComponent/AllFilmsComponent';
import SearcherComponent from '../../components/SearcherComponent/SearcherComponent';
const FilmsPage = () => {

 
 
  return (
    <div>
      <h1>FILMS PAGE</h1>

      <SearcherComponent></SearcherComponent>
      <AllFilmsComponent></AllFilmsComponent>

    </div>
  )
}

export default FilmsPage
