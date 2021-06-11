import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';


import HomeIcon from '@material-ui/icons/Home';
import ImageIcon from '@material-ui/icons/Image';
import CategoryIcon from '@material-ui/icons/Category';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import ShopIcon from '@material-ui/icons/Shop';


const SideBar = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {/* {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname === val.link ? "active" : ""}
              className="row"
              onClick={() => { window.location.pathname = val.link; }}
            >
              {""}
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })} */}
        <li className="row">
          <Link to="/Admin-dashboard">
            {/* <div id="homeicon"> */}
              <HomeIcon />&nbsp;
            {/* </div>
            <div id="inicio"> */}
              Inicio
            {/* </div> */}
          </Link>
        </li>
        <li className="row">
          <Link to="/Agregar-imagen-ofertas">
            {/* <div id="imageicon"> */}
              <ImageIcon />&nbsp;
            {/* </div>
            <div id="imagenes"> */}
              Agregar imágenes de promociones
            {/* </div> */}
          </Link>
        </li>
        <li className="row">
          <Link to="/">
            {/* <div id="shopicon"> */}
              <ShopIcon />&nbsp;
            {/* </div>
            <div id="catalogo"> */}
              Agregar catálogo
            {/* </div> */}
          </Link>
        </li>
        <li className="row">
          <Link to="/">
            {/* <div id="viewcarousel"> */}
              <ViewCarouselIcon />&nbsp;
            {/* </div> */}
            {/* <div id="banners"> */}
              Cambiar banners
            {/* </div> */}
          </Link>
        </li>
        <li className="row">
          <Link to="/ver-categorias-creadas">
            {/* <div id="categoryicon"> */}
              <CategoryIcon />&nbsp;
            {/* </div> */}
            {/* <div id="categoria"> */}
              Agregar categoría
            {/* </div> */}
          </Link>
        </li>
      </ul>

    </div>

  );
}

export default SideBar
