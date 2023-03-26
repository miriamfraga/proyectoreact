import React from 'react';
import PopularFilmsComponent from '../../components/PopularFilmsComponent/PopularFilmsComponent';
import RomanceFilmsComponent from '../../components/RomanceFilmsComponent/RomanceFilmsComponent';
import FilmsDocComponent from '../../components/FilmsDocComponent/FilmsDocComponent';
import SlideshowComponent from '../../components/SlideshowComponent/SlideshowComponent';

const HomePage = () => {

  return (
    <>
    <SlideshowComponent></SlideshowComponent>
    <PopularFilmsComponent></PopularFilmsComponent>
    <RomanceFilmsComponent></RomanceFilmsComponent>
    <FilmsDocComponent></FilmsDocComponent>
    </>
  )
}

export default HomePage
