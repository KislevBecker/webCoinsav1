/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import jabon from '../../Img/Jabon antibacterial Strawberry&kiwi.jpg';
import gel from '../../Img/Gel para manos Original 16 oz.jpg';
import desinfectante from '../../Img/Desinfectante Comercial.jpg'



const Ofertas=()=>{
return(
  <>
    <h2 className="text-coinsa mt-5">Ofertas del día</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="card" style={{height: '20rem'}}>
          <div className="card-body">
            <img src={jabon} className="w-25 center" />
            
          </div>
          <div className="card-footer text-center bg-radial">Jabones</div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{height: '20rem'}}>
          <div className="card-body">
          <img src={gel} className="w-25 center" />
           </div>
           <div className="card-footer text-center bg-radial">Gel de manos</div>

        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{height: '20rem'}}>
          <div className="card-body">
            
          <img src={desinfectante} className="w-25 center"/>

          </div>
          <div className="card-footer text-center bg-radial">Desinfectante</div> 
        </div>
      </div>
      {/* <div className="col-md-3">
        <div className="card">
          <div className="card-body">
          <img src={desinfectante} />
            desinfectantes
          </div>
        </div>
      </div> */}
    </div>
  </>
)
}
export default Ofertas