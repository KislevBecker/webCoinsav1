import React from 'react'
import SideBar from '../../Components/Sidebar'

const AddCategories = () => {
  return (
    <div className="row">
      <div className="col-md-4 col-lg-4">
        <SideBar />
      </div>
      <div className="col-md-8 col-lg-8">
      <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <h1>Agregar categorías</h1>
          <hr />
        </div>
      </div>
      <div className="form">
        <div className="row mt-3 mb-3">
          <div className="col-md-4">
            Ingrese el nombre de la categoría
        </div>
          <div className="col-md-8">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            Seleccione las imagenes a publicar
        </div>
          <div className="col-md-8">
            <input type="file" className="form-control" />
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default AddCategories
