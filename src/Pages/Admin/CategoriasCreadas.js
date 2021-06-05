import React from 'react';
import jabon from '../../Img/Jabon antibacterial Strawberry&kiwi.jpg';
import gel from '../../Img/Gel para manos Original 16 oz.jpg';
import desinfectante from '../../Img/Desinfectante Comercial.jpg'
import SideBar from '../../Components/Sidebar';
import {Link} from 'react-router-dom';

const CategoriasCreadas = () => {
  return (
    <div className="row">
      <div className="col-md-4 col-lg-4">
        <SideBar />
      </div>
      <div className="col-md-8 col-lg-8">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12">
              <h1>Ver imagenes de categoría creada</h1>
              <hr />
            </div>
          </div>
          <div className="row mt-2 mb-2">
            <div className="col-md-12">
              <Link to="/Agregar-categorias" className="btn btn-azul btn-block">Agregar categoría</Link>
            </div>
          </div>
          <select class="form-select mt-3 mb-3" aria-label="Default select example">
            <option selected>Filtrar imagenes por categoría</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="row">
            <div className="col-md-3">
              <div className="card" style={{ height: '20rem', borderRadius: '14px' }}>
                <div className="card-header">
                  Cuidado personal
                </div>
                <div className="card-body">
                  <img src={jabon} className="w-25 center" />

                </div>
                <div className="card-footer text-center">
                  <i className="fas fa-trash" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ height: '20rem', borderRadius: '14px' }}>
              <div className="card-header">
                  Cuidado personal
                </div>
                <div className="card-body">
                  <img src={jabon} className="w-25 center" />

                </div>
                <div className="card-footer text-center">
                  <i className="fas fa-trash" />
                </div>

              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ height: '20rem', borderRadius: '14px' }}>
              <div className="card-header">
                  Cuidado personal
                </div>
                <div className="card-body">
                  <img src={jabon} className="w-25 center" />

                </div>
                <div className="card-footer text-center">
                  <i className="fas fa-trash" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ height: '20rem', borderRadius: '14px' }}>
              <div className="card-header">
                  Cuidado personal
                </div>
                <div className="card-body">
                  <img src={jabon} className="w-25 center" />

                </div>
                <div className="card-footer text-center">
                  <i className="fas fa-trash" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default CategoriasCreadas
