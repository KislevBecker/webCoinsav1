import React from 'react';
import jabon from '../../Img/Jabon antibacterial Strawberry&kiwi.jpg';
import gel from '../../Img/Gel para manos Original 16 oz.jpg';
import desinfectante from '../../Img/Desinfectante Comercial.jpg'

const Categorias=()=>{
return(
  <>
    <h2 className="text-coinsa mt-5">Categorías principales</h2>
    <div className="row">
      <div className="col-md-3">
        <div className="card" style={{height: '20rem', borderRadius:'14px'}}>
          <div className="card-body">
            <img src={jabon} className="w-25 center" />
            
          </div>
          <div className="card-footer text-center">Cuidado personal</div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{height: '20rem', borderRadius:'14px'}}>
          <div className="card-body">
          <img src={gel} className="w-25 center" />
           </div>
           <div className="card-footer text-center">Cuidado del hogar</div>

        </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{height: '20rem', borderRadius:'14px'}}>
          <div className="card-body">
            
          <img src={desinfectante} className="w-25 center"/>

          </div>
          <div className="card-footer text-center">Productos de bioseguridad</div> 
        </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{height: '20rem', borderRadius:'14px'}}>
          <div className="card-body">
          <img src={desinfectante} className="w-25 center" />
          </div>
          <div className="card-footer text-center">Remedios populares</div> 
        </div>
      </div>
    </div>
  </>
)
}
export default Categorias