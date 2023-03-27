import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearcherComponent.scss';

// --IMPORT LA FUNCIÓN QUE BUSCA 
import { getSelect } from '../../store/films/actions';

// --IMPORT USESTATE, USEDISPATCH Y USESELECTOR
import { useState } from 'react';
import { useDispatch,useSelector  } from 'react-redux';


const SearcherComponent = () => { 

     const dispatch = useDispatch()
  // --TRAIGO EL ESTADO QUE ME INTERESA DEL REDUCER QUE ME INTERESA
     const {searched, loadingSelect} = useSelector((state)=>state.FilmsReducer)
  //-- CREAR ESTADO PARA EL INPUT SEARCHER --
     const [searchMovie, setSearchMovie] = useState('')
  
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
 }else{


return   (<div className="div__searcher">
 {/* -- INPUT RECOGIENDO EL VALOR DEL SETEO DE LO QUE ESCRIBE EL USER */}
<input value={searchMovie} type="text" onChange={e=>setSearchMovie(e.target.value)}   placeholder="search a movie..."></input>
{console.log(searchMovie,"search", searched, "searched")}
<button onClick={searcher} >SEARCH</button>
<h1> {searched.id} </h1>

  </div>)
} };

SearcherComponent.propTypes = {};

SearcherComponent.defaultProps = {};

export default SearcherComponent;
