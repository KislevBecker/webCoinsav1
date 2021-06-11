import React from 'react';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ImageIcon from '@material-ui/icons/Image';
import CategoryIcon from '@material-ui/icons/Category';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import ShopIcon from '@material-ui/icons/Shop';

export const SidebarData=[
  {
    title:'Inicio',
    icon:<HomeIcon />,
    link:'/Admin-dashboard'
  },
  {
    title:'Agregar imágenes de promociones',
    icon:<ImageIcon />,
    link:'/Agregar-imagen-ofertas'
  },
  {
    title:'Agregar catálogo',
    icon:<ShopIcon />,
    link:'/'
  },
  {
    title:'Cambiar banners',
    icon:<ViewCarouselIcon />,
    link:'/'
  },
  {
    title:'Agregar categorías',
    icon:<CategoryIcon />,
    link:'/ver-categorias-creadas'
  },
  // {
  //   title:'Cambiar banners',
  //   icon:<HomeIcon />,
  //   link:'/'
  // },
]
// export default SidebarData


