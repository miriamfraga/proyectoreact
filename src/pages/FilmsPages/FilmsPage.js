import React from 'react'

/* IMPORT COMPONENTS */
import FilmsComponent from '../../components/FilmsComponent/FilmsComponent';
import FilmsDocComponent from '../../components/FilmsDocComponent/FilmsDocComponent';
import GenreComponent from '../../components/GenreComponent/GenreComponent';
import RomanceFilmsComponent from '../../components/RomanceFilmsComponent/RomanceFilmsComponent';

const FilmsPage = () => {
  return (
    <div>
      <h1>FILMS PAGE</h1>
      <FilmsComponent ></FilmsComponent>
      <FilmsDocComponent></FilmsDocComponent>
      <RomanceFilmsComponent></RomanceFilmsComponent>
      <GenreComponent></GenreComponent>
    </div>
  )
}

export default FilmsPage
