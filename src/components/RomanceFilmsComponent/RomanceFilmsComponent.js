import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import  './RomanceFilmsComponent.scss';

// IMPORT DE LA FUNCIÓN QUE TRAE LAS PELIS Y HOOKS
import { useDispatch, useSelector } from 'react-redux';
import { getRomanceFilms } from '../../store/films/actions';
//IMPORTACIONES DE SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Scrollbar} from 'swiper'

// IMPORTACIONES DE ESTILOS DE SWIPER
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

// MIENTRAS CARGUE MUESTRA ESTO
if(loadingRomanceFilms){
  return(
    <p> 
    "Loading..."
    </p>
  )
  
}
const urlImage = "https://image.tmdb.org/t/p/w500/"

return (
  <section className="div__section">
    <h2> Películas para quienes aún piensan en el amor romántico...</h2>
    <Swiper style={{"--swiper-navigation-color": "#02ffa1", "--swiper-pagination-color": "#02ffa1", "--swiper-scrollbar-drag-bg-color": "#02ffa1" }}
      modules={[Navigation, A11y, Scrollbar]}
      spaceBetween={50}
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
             <img className="div__section__ul__li__div__img" src={`${urlImage}${film.poster_path}`}  alt={film.title} ></img>
             <h2 className="section__div__wrapper__title">{film.original_title}</h2>
          </li>
          </SwiperSlide>  )}
            </ul>
            </Swiper>
         </section>

)
};

RomanceFilmsComponent.propTypes = {};

RomanceFilmsComponent.defaultProps = {};

export default RomanceFilmsComponent;
