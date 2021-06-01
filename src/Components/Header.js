/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../Img/Logo Coinsa-01.png';
import certificados from '../Img/LOGOS ISO.png';
import {Link} from 'react-router-dom';

const Header = () =>{
  return (
    <header className="container pt-4 pb-3">
    <div className="row no-gutters">
        <div className="col-12 col-md-10">
            <Link to="/">
                <img src={Logo} alt="logo-farmex" className="w-25 mr-2 " />
            </Link>
                {/* // className="img-fluid d-block d-sm-block d-md-none mx-auto mb-3 mt-2" width="50" /> */}
            {/* <div className="d-flex">
                <img src={Logo} alt="logo-farmex" className="w-50 mr-2 " />
                    // className="w-50 mr-2 img-logo d-none d-sm-none d-md-block"  width="50"/> */}
                {/* <div className="input-group mt-2">
                    <input type="text" className="form-control rounded-left-search"
                        placeholder="Buscar por nombre del producto, sintoma, ingrediente activo o laboratorio."
                        aria-label="Buscar por nombre del producto, sintoma, ingrediente activo o laboratorio."
                        aria-describedby="basic-addon2" />
                    <div className="input-group-btn">
                        <a href="Shop.html"
                            className="btn border rounded-right-search text-farmex-purple font-weight-bold"> <i
                            className="fas fa-search mr-2"></i>Buscar</a>
                    </div>
                </div> */}
            {/* </div> */}
        </div>
        <div className="col-12 col-md-2">
            <div className="ml-3 mt-2" style={{ display: 'flex',flexDirection: 'row'}}>
                <div className="dropdown">
                    <button className="btn btn-azul dropdown-toggle mr-2 text-uppercase " type="button"
                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user mr-1"></i> Mi Cuenta
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/Login">Iniciar sesión</a>
                        {/* <a className="dropdown-item" href="Register.html">Registrarse</a> */}
                    </div>
                </div>
                <div className="ml-cart">
                <img src={certificados} alt="logo-farmex" className="image-fluid mr-2" style={{ width: '130px'}}/>
                </div>
            </div>
        </div>
    </div>
</header>

  )
}
export default Header