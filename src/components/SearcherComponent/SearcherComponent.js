import React from 'react';
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
     const urlImage = "https://image.tmdb.org/t/p/w500/"
     
  // --CREAR FUNCIÓN PARA BUSCAR QUE HACE UNA PETICIÓN A LA API PASANDO LA QUERY DEL NOMBRE DE LA PELI--
  
 
 
  function searcher(){

    dispatch (getSelect(searchMovie))
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
 }else{


return   (<div className="div__searcher">
 {/* -- INPUT RECOGIENDO EL VALOR DEL SETEO DE LO QUE ESCRIBE EL USER */}

 <div className="box">
    <form name="search">
        <input type="text" className="input" name="txt"  value={searchMovie}  onChange={e=>setSearchMovie(e.target.value)}   placeholder="find..."></input>
    </form>
    <i className="fas fa-search"></i>
</div>


{/* <input value={searchMovie} type="text" onChange={e=>setSearchMovie(e.target.value)}   placeholder="search a movie..."></input> */}
{console.log(searchMovie,"searchMovie")}

<Link to="/search"> <button className="section__detail__div__button__watch" onClick={searcher} >SEARCH 🍿</button></Link>
 {searched.images?.map((film)=>{   
  console.log(searched, "soy searched")
 return ( 
   
  <div>  <Link to={`/film/${film.id}`}> <div> 
  <h3>{film.title} </h3>
  <img src={`${urlImage}${film.backdrop_path}`} alt={film.title} ></img>
  </div></Link></div>)
})}

</div>)
} };

SearcherComponent.propTypes = {};

SearcherComponent.defaultProps = {};

export default SearcherComponent;
