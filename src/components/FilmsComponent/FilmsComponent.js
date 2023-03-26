import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/* IMPORT STYLES */
import  './FilmsComponent.scss';

/* IMPORT REDUX */
import { useDispatch, useSelector } from 'react-redux';

/* IMPORT LINK */
import { Link } from 'react-router-dom';

/* IMPORT GETFILMS */
import {getFilms} from '../../store/films/actions';

// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const FilmsComponent = () => { 

  //DISPATCH DISPARA LA FUNCIÓN DE OBTENER PELIS Y OCURRE AL INICIO POR USEFFECT
  const dispatch = useDispatch()
  const {films, loadingFilms} = useSelector((state)=> state.FilmsReducer)
  useEffect(()=>{
    dispatch(getFilms())
  }, [])
// MIENTRAS ESTÉ CARGANDO MUESTRA ESTO
if(loadingFilms){
  return(
    <p> 
    "Loading..."
    </p>
  )

}

 const urlImage = "https://image.tmdb.org/t/p/w500/"
  return (
    <section className="div__section">
      <h2>Películas que desestresan de un "compiled whith problems"</h2>
      <Swiper style={{"--swiper-navigation-color": "#02ffa1", "--swiper-pagination-color": "#02ffa1", "--swiper-scrollbar-drag-bg-color": "#02ffa1" }}  
        modules={[Navigation, A11y, Scrollbar]}
        spaceBetween={25}
        slidesPerView={6}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >

       <ul className="div__section__ul">
         {films.map((film)=>
    
    
           <SwiperSlide key={film.id} className="div__section__ul__li">
          
                <li className="div__section__ul__li__div">  
                <Link to={`/film/${film.id}`}>        
               <img className="div__section__ul__li__div__img" src={`${urlImage}${film.poster_path}`}  alt={film.title} ></img>
               </Link>  
               <h4 className="section__div__wrapper__title">{film.original_title}</h4>
            </li>
            
            </SwiperSlide>  )}
              </ul>
              </Swiper>
           </section>
           
    
  )
};


FilmsComponent.propTypes = {};

FilmsComponent.defaultProps = {};

export default FilmsComponent;
