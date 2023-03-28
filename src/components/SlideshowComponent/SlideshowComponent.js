import React from 'react';
import PropTypes from 'prop-types';

/* IMPORT STYLES */
import './SlideshowComponent.scss';

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SlideshowComponent = () => {
  return (
    <section className='section__slideshow section'>
      <Swiper style={{"--swiper-navigation-color": "#02ffa1","--swiper-pagination-color": "#02ffa1", "--swiper-scrollbar-drag-bg-color": "#02ffa1"}}
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        navigation
        autoplay={{delay: 5000, disableOnInteraction: false,}}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img src='https://static.filmin.es/images/wildcard/1838/1/highlighted_0_3_2400x1350.jpg' alt=''/></SwiperSlide>
        <SwiperSlide><img src='https://static.filmin.es/images/media/5217/1/still_0_3_2400x1350.webp' alt=''/></SwiperSlide>
        <SwiperSlide><img src='https://static.filmin.es/images/media/16381/2/still_0_3_2400x1350.webp' alt=''/></SwiperSlide>
        <SwiperSlide><img src='' alt=''/></SwiperSlide>
      </Swiper>
    </section>
  )
}

SlideshowComponent.propTypes = {};

SlideshowComponent.defaultProps = {};

export default SlideshowComponent;
