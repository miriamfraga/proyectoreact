import React from 'react'

/* IMPORT COMPONENTS */
import FilmsDocComponent from '../../components/FilmsDocComponent/FilmsDocComponent';
import GenreComponent from '../../components/GenreComponent/GenreComponent';
import FilmsComponent from '../../components/FilmsComponent/FilmsComponent';
import AllFilmsComponent from '../../components/AllFilmsComponent/AllFilmsComponent';
// import VideoFilmsComponent from '../../components/VideoFilmsComponent/VideoFilmsComponent';
const FilmsPage = () => {
  return (
    <div>
      <h1>FILMS PAGE</h1>
      <GenreComponent></GenreComponent>
      <AllFilmsComponent></AllFilmsComponent>

      {/* <FilmsComponent></FilmsComponent> */}
      {/* <FilmsDocComponent></FilmsDocComponent> */}

    </div>
  )
}

export default FilmsPage
