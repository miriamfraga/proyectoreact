import React from 'react';
import PopularFilmsComponent from '../../components/PopularFilmsComponent/PopularFilmsComponent';
import RomanceFilmsComponent from '../../components/RomanceFilmsComponent/RomanceFilmsComponent';
import FilmsDocComponent from '../../components/FilmsComponent/FilmsComponent';
const HomePage = () => {

  return (
    <>
    <PopularFilmsComponent></PopularFilmsComponent>
    <RomanceFilmsComponent></RomanceFilmsComponent>
    <FilmsDocComponent></FilmsDocComponent>
    </>
  )
}

export default HomePage
