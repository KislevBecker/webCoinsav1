import React from 'react';
import SideBar from '../../Components/Sidebar';

const AddPromo = () => {
  return (
    <>
      {/* <div className="bg-admin"> */}
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <SideBar />
          </div>

          <div className="col-md-8 col-lg-8">
            <div className="row bg-admin-2">
              <div className="card"> 
              <div className="card-header">
                <h1>Agregar imágenes de ofertas del día</h1>
              </div>
                <div className="card-body">
                  <div className="row">
                    <div className= "col-md-12">
                      <input type="file" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>

      {/* </div> */}
    </>
  )
}
export default AddPromo