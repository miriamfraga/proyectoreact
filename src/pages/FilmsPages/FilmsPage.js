import React from 'react'
import FilmsComponent from '../../components/FilmsComponent/FilmsComponent';
import FilmsDocComponent from '../../components/FilmsDocComponent/FilmsDocComponent';
import GenreComponent from '../../components/GenreComponent/GenreComponent';
const FilmsPage = () => {
  return (
    <div>
      <FilmsComponent ></FilmsComponent>
      <FilmsDocComponent></FilmsDocComponent>
      <GenreComponent></GenreComponent>
    </div>
  )
}

export default FilmsPage
