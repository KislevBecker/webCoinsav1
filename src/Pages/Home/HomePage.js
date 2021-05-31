import React from 'react';
import Carrusel from '../../Components/Carrusel';
import Catalogo from './Catalogo';
import Contactanos from './Contactanos';
import Ofertas from './Ofertas';
import Categorias from './Categorias';


const HomePage=()=>{
return(
  <>
    <div className="container">
      <Carrusel />      
      <Catalogo />
      <Ofertas />
      <Categorias />
      <Contactanos />
    </div>
  </>
)
}
export default HomePage