/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { ExternalLink } from 'react-external-link';


const Contactanos=()=>{
return(
  <>
    <h2 className="text-coinsa mt-5">Contáctanos</h2>
    <div className="row mb-5">
      <div className="col-md-4">
        <div className="card" >
        <ExternalLink className="anchor" href="tel:50422308900">
        <div className="card-body text-center">
        <i class="fas fa-phone-alt fa-7x"></i>            
          </div>
          <div className="card-footer text-center">
            LLámanos al <br />
            (504) 2230-8900</div>
        </ExternalLink>

        </div>
      </div>
      <div className="col-md-4">
        <div className="card" >
        <ExternalLink className="anchor" href="mailto:info@coinsa.hn">
        <div className="card-body text-center">
        <i class="fas fa-envelope fa-7x"></i>
           </div>
           <div className="card-footer text-center">
             Envíanos un correo a:<br />
             info@coinsa.hn
             </div>
          
          </ExternalLink>

        </div>
      </div>
      <div className="col-md-4">
        <div className="card" >
        <ExternalLink className="anchor" href="https://wa.me/5211234567890">
        <div className="card-body text-center">
            
            <i class="fab fa-whatsapp fa-7x"></i>
            </div>
            <div className="card-footer text-center">Escríbenos al whatsapp: <br />
            (+504) 9990-0990
            </div> 
  
          </ExternalLink>
        </div>
      </div>
    </div>
  </>
)
}
export default Contactanos