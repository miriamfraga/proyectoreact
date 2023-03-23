import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './FilmsDocComponent.scss';

//IMPORTACIONES DE HOOKS Y FUNCIÓN GETFILMSDOC
import { useDispatch, useSelector } from 'react-redux';
import { getFilmsDoc } from '../../store/films/actions';
import { Link } from 'react-router-dom';
//IMPORTACIONES DE SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Scrollbar} from 'swiper'

// IMPORTACIONES DE ESTILOS DE SWIPER
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const FilmsDocComponent = () => { 

  //DISPATCH DISPARA LA FUNCIÓN DE OBTENER PELIS Y OCURRE AL INICIO POR USEFFECT

 const dispatch = useDispatch()
 const {docs, loadingDocs} = useSelector((state)=> state.FilmsReducer)
  useEffect(()=>{
    dispatch(getFilmsDoc())
  },[])
  
  //MIENTRAS CARGUE MUESTRA ESTO
  if(loadingDocs){
    return(
      <p> 
      "Loading..."
      </p>
    )
  
  }
  const urlImage = "https://image.tmdb.org/t/p/w500/"
 return (
   <section className="div__section">
     <h2> Películas documentales para pasar el finde</h2>
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
        {docs.map((doc)=>
     
          <SwiperSlide key={doc.id} className="div__section__ul__li">
           <li className="div__section__ul__li__div">   
           <Link to={`/film/${doc.id}`}>      
              <img className="div__section__ul__li__div__img" src={`${urlImage}${doc.poster_path}`}  alt={doc.title} ></img>
              </Link> 
              <h2 className="section__div__wrapper__title">{doc.original_title}</h2>
           </li>
           </SwiperSlide>  )}
             </ul>
             </Swiper>
          </section>
 )
 } ;

FilmsDocComponent.propTypes = {};

FilmsDocComponent.defaultProps = {};

export default FilmsDocComponent;
