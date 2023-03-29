import React from 'react'

/* IMPORT STYLES */
import './AboutPage.scss';

/* IMPORT FONTAWESOME */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimeline, faHeart, faPeopleGroup, faHandFist } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  return (
    <>
      <h1 className='about__h1 h1'>Sobre FIlmsHub</h1>
      <section className='section__about section'>
        <ul className='about__ul ul'>
          <li className='about__li li'>
            <h2 className='about__h2 h2'><FontAwesomeIcon icon={faTimeline} style={{color: "#02ffa1",}} /> Nuestra historia</h2>
            <hr/>
            <p className='about__p p'><b>Nuestra empresa</b> se fundó en el año 2005 
            por dos amigos que compartían una visión común: crear una empresa 
            innovadora y ética que ofreciera soluciones de calidad a sus clientes. 
            Desde entonces, hemos trabajado duro para consolidarnos como líderes 
            en nuestro sector y hemos logrado establecer una amplia red de contactos 
            y colaboradores en todo el mundo. Estamos muy orgullosos de lo que hemos 
            logrado y estamos entusiasmados por el futuro.</p>
          </li>
          <li className='about__li li'>
            <h2 className='about__h2 h2'><FontAwesomeIcon icon={faHeart} style={{color: "#02ffa1",}} /> Nuestros valores</h2>
            <hr/>
            <p className='about__p p'><b>En nuestra empresa</b>, creemos en la integridad, 
            la honestidad y la ética en los negocios. Nos esforzamos por mantener 
            altos estándares en todo lo que hacemos y tratamos a nuestros clientes, 
            empleados y colaboradores con respeto y consideración. Además, estamos 
            comprometidos con la innovación y la excelencia en todo lo que hacemos 
            y nos esforzamos por superar las expectativas de nuestros clientes en 
            todo momento.</p>
          </li>
          <li className='about__li li'>
            <h2 className='about__h2 h2'><FontAwesomeIcon icon={faPeopleGroup} style={{color: "#02ffa1",}} /> Nuestro equipo</h2>
            <hr/>
            <p className='about__p p'><b>Nuestro equipo</b> está formado por profesionales 
            altamente capacitados y apasionados por lo que hacen. Cada uno de ellos 
            aporta su experiencia y conocimientos únicos, lo que nos permite ofrecer 
            soluciones personalizadas y adaptadas a las necesidades de nuestros 
            clientes. Además, valoramos la formación continua y ofrecemos oportunidades 
            de crecimiento y desarrollo profesional a todos nuestros empleados.</p>
          </li>
          <li className='about__li li'>
            <h2 className='about__h2 h2'><FontAwesomeIcon icon={faHandFist} style={{color: "#02ffa1",}} /> Nuestra misión</h2>
            <hr/>
            <p className='about__p p'><b>Nuestra misión</b> es ofrecer soluciones innovadoras 
            y de alta calidad a nuestros clientes, al mismo tiempo que nos esforzamos 
            por mantener altos estándares éticos y de integridad en todos nuestros 
            negocios. Nos esforzamos por ser líderes en nuestro sector y trabajar 
            arduamente para superar las expectativas de nuestros clientes en todo 
            momento. Además, nos comprometemos a apoyar a nuestras comunidades locales 
            y a ser un empleador responsable y comprometido.</p>
          </li>
        </ul>
      </section>
    </>
  )
}

export default AboutPage
