import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import  './FilmsComponent.scss';

// IMPORTACIONES DE HOOKS Y FUNCIÓN GETFILMS
import { useDispatch, useSelector } from 'react-redux';
import { getDramaFilms} from '../../store/films/actions';
import { Link } from 'react-router-dom';

// IMPORTACIONES DE SWIPER 
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Scrollbar} from 'swiper'

// IMPORTACIONES DE ESTILOS DE SWIPER
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const FilmsComponent = () => { 





  //DISPATCH DISPARA LA FUNCIÓN DE OBTENER PELIS Y OCURRE AL INICIO POR USEFFECT
  const dispatch = useDispatch()
  const {dramaFilms, loadingDramaFilms} = useSelector((state)=> state.FilmsReducer)
  const urlImage = "https://image.tmdb.org/t/p/w500/"
  useEffect(()=>{
    dispatch(getDramaFilms())
  }, [])

// MIENTRAS ESTÉ CARGANDO MUESTRA ESTO Y SI NO, DEVUELVE EL MAPEO
if(loadingDramaFilms){
  return(
    <p> 
    "Loading..."
    </p>
  )

} else{ 

  return (
    <section className="div__section">
      <h2>DRAMA : películas que desestresan de un "compiled whith problems"</h2>
      <Swiper style={{"--swiper-navigation-color": "#02ffa1", "--swiper-pagination-color": "#02ffa1", "--swiper-scrollbar-drag-bg-color": "#02ffa1" }}  
        modules={[Navigation, A11y, Scrollbar]}
        spaceBetween={50}
        slidesPerView={6}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')} >

          <ul className="div__section__ul">

           {dramaFilms.map((film)=>
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
}};


FilmsComponent.propTypes = {};

FilmsComponent.defaultProps = {};

export default FilmsComponent;