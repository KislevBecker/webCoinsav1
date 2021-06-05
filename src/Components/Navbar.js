/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>{
  return (
//     <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-coinsa">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Inicio</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarText">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Categorías
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li><a className="dropdown-item" href="#"> <i class="fas fa-chevron-circle-right"></i> Cuidado personal</a></li>
//           <li><a className="dropdown-item" href="#"><i class="fas fa-chevron-circle-right"></i> Cuidado del hogar</a></li>
//           <li><a className="dropdown-item" href="#"><i class="fas fa-chevron-circle-right"></i> OTC analgésicos</a></li>
//           <li><a className="dropdown-item" href="#"><i class="fas fa-chevron-circle-right"></i> Éticos</a></li>
//           <li><a className="dropdown-item" href="#"><i class="fas fa-chevron-circle-right"></i> Remedios populares</a></li>
//           <li><a className="dropdown-item" href="#"><i class="fas fa-chevron-circle-right"></i> Antisépticos</a></li>
//           <li><a className="dropdown-item" href="#"><i class="fas fa-chevron-circle-right"></i> Bioseguridad</a></li>
//           <li className="nav-item dropdown">
//             <a className="nav-link font-weight-bold dropdown-toggle" href="#" data-toggle="dropdown">
//               Sintomatologías</a>
//             <ul className="dropdown-menu fade-up">
//               <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
//               <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
//               <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
//             </ul>
//           </li>

//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Features</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Pricing</a>
//         </li>
//       </ul>
//       <span className="navbar-text">
//         Navbar text with an inline element
//       </span>
//     </div>
//   </div>
// </nav>
<nav className="navbar navbar-expand-lg navbar-light bg-coinsa">
<div className="container">
  <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#main_nav"
    aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-bars text-white"></i>
  </button>
  <div className="collapse navbar-collapse" id="main_nav">
    <ul className="navbar-nav  fade-up">
    <li className="nav-item">
        <Link className="nav-link text-white font-weight-bold" to="/">Inicio</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle text-white font-weight-bold" id="dropdown1" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Categorías</Link>
        <ul className="dropdown-menu" aria-labelledby="dropdown1">
          <li className="dropdown-item" to="/categorias"><Link>Cuidado del hogar</Link></li>
          <li className="dropdown-item dropdown">
            <Link className="dropdown-toggle" id="dropdown1-1" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">Cuidado personal</Link>
            <ul className="dropdown-menu3" aria-labelledby="dropdown1-1">
              <li className="dropdown-item" to="/categorias-cuidado-personal"><Link>Cuidado del cabello</Link></li>
              <li className="dropdown-item" to="/categorias-cuidado-personal"><Link>Cuidado del cuerpo</Link></li>
              <li className="dropdown-item" to="/categorias-cuidado-personal"><Link>Cremas especializadas</Link></li>
              <li className="dropdown-item" to="/categorias-cuidado-personal"><Link>Cuidado de la manos</Link></li>
              
              {/* <li className="dropdown-item dropdown">
                <a className="dropdown-toggle" id="dropdown1-1-1" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">Dropdown1.1.1</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown1-1-1">
                  <li className="dropdown-item" href="#"><a>Action 1.1.1</a></li>
                </ul>
              </li> */}
            </ul>
          </li>
          <li><Link className="dropdown-item" to="/categorias-cuidado-personal">OTC analgésicos</Link></li>
          <li><Link className="dropdown-item" to="/categorias-cuidado-personal">Éticos</Link></li>
          <li><Link className="dropdown-item" to="/categorias-cuidado-personal">Remedios populares</Link></li>
          <li><Link className="dropdown-item" to="/categorias-cuidado-personal">Antisépticos</Link></li>
          <li><Link className="dropdown-item" to="/categorias-cuidado-personal">Bioseguridad</Link></li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link text-white font-weight-bold dropdown-toggle" href="#" data-toggle="dropdown">
          Sobre nosotros</a>
        <ul className="dropdown-menu fade-up">
          <li><Link className="dropdown-item" href="#"> Nuestra historia</Link></li>
          <li><Link className="dropdown-item" href="#"> Certificaciones </Link></li>
          <li><Link className="dropdown-item" href="#"> Exportaciones </Link></li>
          <li><Link className="dropdown-item" href="#"> Únete a nuestra familia COINSA </Link></li>
        </ul>
      </li>
      {/* <li className="nav-item dropdown">
        <a className="nav-link text-white font-weight-bold dropdown-toggle" href="#" data-toggle="dropdown">
          Promociones</a>
        <ul className="dropdown-menu fade-up">
          <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
          <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
          <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
        </ul>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link text-white font-weight-bold" href="#">Sobre nosotros</a>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link text-white font-weight-bold" href="#">Exportaciones</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white font-weight-bold" href="#">Líneas de producción</Link>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link text-white font-weight-bold" href="#">Trabaja con nosotros</a>
      </li> */}
    </ul>

  </div> 
  {/* <!-- navbar-collapse.// --> */}
</div>
</nav>
  )
}
export default Navbar