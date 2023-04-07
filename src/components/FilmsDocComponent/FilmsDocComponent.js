import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/* IMPORT STYLES */
import './FilmsDocComponent.scss';

/* IMPORT REDUX */
import { useDispatch, useSelector } from 'react-redux';

/* IMPORT LINK */
import { Link } from 'react-router-dom';

/* IMPORT GETFILMSDOC */
import { getFilmsDoc } from '../../store/films/actions';

// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
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
    <h2>Películas documentales para pasar el finde</h2>
    <Swiper style={{"--swiper-navigation-color": "#02ffa1","--swiper-pagination-color": "#02ffa1", "--swiper-scrollbar-drag-bg-color": "#02ffa1", "--swiper-scrollbar-bg-color": "#5c5c5c"}}
      modules={[Navigation, A11y, Scrollbar]}
      spaceBetween={25}
      slidesPerView={4}
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
              <div className='overlay'>
                <img className="doc-movies__img img" src={`${urlImage}${doc.poster_path}`}  alt={doc.title} ></img>
              </div>   
            </Link> 
            <h4 className="section__div__wrapper__title">{doc.original_title}</h4>
            </li>
          </SwiperSlide>  )}
        </ul>
      </Swiper>
    </section>
  )
}

FilmsDocComponent.propTypes = {};

FilmsDocComponent.defaultProps = {};

export default FilmsDocComponent;
