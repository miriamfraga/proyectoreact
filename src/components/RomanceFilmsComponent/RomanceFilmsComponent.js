import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/* IMPORT STYLES */
import './RomanceFilmsComponent.scss';

/* IMPORT REDUX */
import { useDispatch, useSelector } from 'react-redux';

/* IMPORT LINK */
import { Link } from 'react-router-dom';

/* IMPORT GETROMANCEFILMS */
import { getRomanceFilms } from '../../store/films/actions';

// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const RomanceFilmsComponent = () => { 

  const dispatch = useDispatch()
  const {romanceFilms, loadingRomanceFilms} = useSelector((state)=> state.FilmsReducer)
  
  useEffect(()=>{
    dispatch(getRomanceFilms())
  },[])

  /* MIENTRAS CARGUE MUESTRA ESTO */
  if (loadingRomanceFilms) {
    return (
      <p> 
        "Loading..."
      </p>
    )
  }

  const urlImage = "https://image.tmdb.org/t/p/w500/"

  return (
    <section className="div__section">
      <h2>Películas para quienes aún piensan en el amor romántico...</h2>
      <Swiper style={{"--swiper-navigation-color": "#02ffa1","--swiper-pagination-color": "#02ffa1", "--swiper-scrollbar-drag-bg-color": "#02ffa1", "--swiper-scrollbar-bg-color": "#5c5c5c"}}
        modules={[Navigation, A11y, Scrollbar]}
        spaceBetween={25}
        slidesPerView={6}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <ul className="div__section__ul">
          {romanceFilms.map((film)=>
            <SwiperSlide key={film.id} className="div__section__ul__li">
              <li className="div__section__ul__li__div"> 
                <div className='overlay'>
                  <Link to={`/film/${film.id}`}>        
                    <img className="div__section__ul__li__div__img" src={`${urlImage}${film.poster_path}`}  alt={film.title} ></img>
                  </Link>
                </div>
                <h4 className="section__div__wrapper__title">{film.original_title}</h4>
              </li>
            </SwiperSlide>)}
        </ul>
      </Swiper>
    </section>
  )
};

RomanceFilmsComponent.propTypes = {};

RomanceFilmsComponent.defaultProps = {};

export default RomanceFilmsComponent;
