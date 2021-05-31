import React from 'react';
import {Link} from 'react-router-dom';

const AdminMenu=()=>{
return (
  <>
   <div className="sidenav bg-admin d-flex align-items-end flex-column ham">
        <nav className="navbar navbar-expand-md  border-0 shadow-none">
          <button
            className="navbar-toggler text-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i className="fas fa-bars fa-1x " />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
            <ul className="vertical">
              <li>
                <Link to="/" className="link-admin">
                  <i className="fas fa-home align-i" />
                  {' '}
                  <span className="align-l"> Inicio </span>
                </Link>
              </li>
              <li>
                <Link to="/adminImageProduct" className="link-admin">
                  <i className="far fa-images align-i" />
                  {' '}
                  <span className="align-l">Imágenes de Producto</span>
                </Link>
              </li>
              <li>
                <Link to="/push-notification" className="link-admin">
                  <i className="fas fa-bell align-i" />
                  {' '}
                  <span className="align-l">Gestionar imagenes de banner</span>
                </Link>
              </li>
              <li>
                <Link to="/symptomatology" className="link-admin">
                  <i className="fas fa-stethoscope align-i" />
                  {' '}
                  <span className="align-l">Agregar categoría</span>
                </Link>
              </li>
              <li>
                <Link to="add-symptomatology-to-product" className="link-admin">
                  <i className="fas fa-notes-medical align-i" />
                  <span className="align-l">Agregar ofertas</span>
                  {' '}
                </Link>
              </li>
              <li>

                <Link to="adminTimeTable" className="link-admin">
                  <i className="fas fa-map-marked-alt align-i" />
                  <span className="align-l">Agregar Nuevo catálogo</span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-success btn-block mt-2"
                  // onClick={() => {
                  //   Meteor.logout(error => {
                  //     if (!error) {
                  //       <LoaderComponent />;
                  //     } else {
                  //       window.location = '/';
                  //     }
                  //   });
                  // }}
                  >
                  <i className="fas fa-sign-in-alt align-i" />
                  Salir
                </button>
              </li>
            </ul>
          </div>
        </nav>

      </div>
  </>
)

}
export default AdminMenu