import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './SearcherComponent.scss';

// --IMPORT LA FUNCIÓN QUE BUSCA 
import { getSelect } from '../../store/films/actions';
// --IMPORT USESTATE, USEDISPATCH Y USESELECTOR
import { useState } from 'react';
import { useDispatch,useSelector  } from 'react-redux';
// --IMPORT LINK PARA REDIRIGIRME A UNA SOLA PAG
import { Link } from 'react-router-dom';
const SearcherComponent = () => { 

     const dispatch = useDispatch()

  // --TRAIGO EL ESTADO QUE ME INTERESA DEL REDUCER QUE ME INTERESA
     const {searched, loadingSelect} = useSelector((state)=>state.FilmsReducer)
  //-- CREAR ESTADO PARA EL INPUT SEARCHER --
     const [searchMovie, setSearchMovie] = useState('')
  // --URL CONST IMG   
     const urlImage = "https://image.tmdb.org/t/p/original/"
     const urlImage1 = "https://image.tmdb.org/t/p/w500/"
     
  // --CREAR FUNCIÓN PARA BUSCAR QUE HACE UNA PETICIÓN A LA API PASANDO LA QUERY DEL NOMBRE DE LA PELI--

 function searcher(){
   dispatch(getSelect(searchMovie))
    setSearchMovie('')
  }

//    CREAR INPUT Y BINDEAR EL VALOR DE BÚSQUEDA CON LOS NOMBRES DE LAS PELÍCULAS 
//    CREAR EVENTO DE ONCHANGE PARA CUANDO SE VAYA METIENDO CADA LETRA VAYA SUGIRIENDO UNA PELI Y 
//    OBTENCIÓN DEL VALOR CON E.T.VALUE  

if (loadingSelect){

return (
  <p>
    "Loading..."
  </p>
)
 }


return   (<div className="div__searcher">
     <div className="box">
        <form name="box__search">
            <input type="text" className="box__search__input" name="txt"  value={searchMovie}  onChange={e=>setSearchMovie(e.target.value)}   placeholder="find..."></input>
        </form>
        <i className="fa fa-search"></i>
     </div>

<section className='section__results'> 
<Link to="/search"> <button className="section__detail__div__button__watch" onClick={searcher} >SEARCH 🍿</button></Link>
 
 
 {/* --CONDICIONALES PARA QUE NO MUESTRE LAS PELÍCULAS QUE NO TENGAN IMÁGENES-- */}
  {searched && searched?.map((film)=>
  <div key={film.id} className='div__searcher__div'> 
   <Link to={`/film/${film.id}`}> <div> 
  {`${urlImage}${film.backdrop_path}` !== `${urlImage}null` && `${urlImage1}null`  ?
  <h3 className='div__searcher__div__title'>{film.title} </h3> &&
 
   <img src={`${urlImage}${film.backdrop_path}`} alt={film.title} ></img>: '' } 

   {`${urlImage}${film.poster_path}` !== `${urlImage}null` && `${urlImage1}null`  ?
   <h3 className='div__searcher__div__title'>{film.title} </h3> &&
  <img src={`${urlImage}${film.poster_path}`} alt={film.title} ></img>: '' } 

 
  </div></Link></div>
)}
</section> 

</div>)
} ;

SearcherComponent.propTypes = {};

SearcherComponent.defaultProps = {};

export default SearcherComponent;
