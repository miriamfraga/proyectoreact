import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/* IMPORT STYLES */
import './PopularFilmsComponent.scss';

/* IMPORT REDUX */
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// IMPORT GETPOPULARFILMS
import { getPopularFilms } from '../../store/films/actions';

// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const PopularFilmsComponent = () => {
  
  const dispatch = useDispatch();
  const { popularFilms, loadingPopularFilms } = useSelector((state) => state.FilmsReducer);

  useEffect(() => {
    dispatch(getPopularFilms())
  },[])

  if (loadingPopularFilms) {
    return (
      <p>
        Loading...
      </p>
    )
  }

  return (
    <section className='section__popular-movies section'>
      <h2>Películas Populares</h2>
      <Swiper style={{"--swiper-navigation-color": "#02ffa1","--swiper-pagination-color": "#02ffa1", "--swiper-scrollbar-drag-bg-color": "#02ffa1" }}
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={6}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <ul className='popular-movies__ul ul'>
          {popularFilms.map((film) =>
            <SwiperSlide key={film.id}>
              <li className='popular-movies__li li'>
              <Link to={`/film/${film.id}`}>   
                <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title}/>
                </Link>
                <h4 className='popular-movies__h3 h3'>{film.title}</h4>
              </li>
            </SwiperSlide>)}
        </ul>
      </Swiper>
    </section>
  )
}

PopularFilmsComponent.propTypes = {};

PopularFilmsComponent.defaultProps = {};

export default PopularFilmsComponent;