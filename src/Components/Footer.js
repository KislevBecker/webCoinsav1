/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Link, withRouter}  from 'react-router-dom';
import { ExternalLink } from 'react-external-link';


const date = new Date();
      const yyyy = date.getFullYear();
const Footer = () => (
<div className="footer bg-light">
  <section className="container pt-3">
    <div className="row">
    <div className="col-md-6">
      <h5 className="text-coinsa text-uppercase font-weigth bold"> Oficinas principales</h5>
    <div className= "row">
      <div className="col-md-6 border-right">
        <p className="text-coinsa"><b>Tegucigalpa, Honduras</b><br />
        Colonia Miraflores, Boulevard Santa Cristina, contiguo a HCT, frente a Autorepuestos NAPA.
        </p>
      </div>
    </div>
    </div>
    <div className="col-md-6">
      <div className="row">
        <div className="col-md-6">
        <h5 className="text-coinsa text-uppercase font-weigth bold text-informacion"> Información</h5>
        <ul>
          <li>
            <Link to="/Acerca-de-nosotros" className="anchor"><i class="fas fa-chevron-right"></i> Acerca de nosotros</Link>
          </li>
          <li>
          <Link to="/Mision-y-vision" className="anchor"><i class="fas fa-chevron-right"></i> Misión y visión</Link>
          </li>
          <li>
          <Link to="/Valores-y-lineamientos" className="anchor"><i class="fas fa-chevron-right"></i> Valores</Link>
          </li>
          <li>
          <Link to="/Valores-y-lineamientos" className="anchor"><i class="fas fa-chevron-right"></i> Términos y condiciones</Link>
          </li>
        </ul>
        </div>
        <div className="col-md-6 mb-3">
          
        <h5 className="text-coinsa text-uppercase font-weigth bold text-informacion"> Síguenos</h5>
          <ExternalLink className="anchor" href="https://es-la.facebook.com/pages/category/Medical-Company/Grupo-Farinter-Recursos-Humanos-1420256331334635/"><i className="fab fa-facebook text-coinsa"></i> Facebook </ExternalLink><br />
          <ExternalLink className="anchor" href="https://es-la.facebook.com/pages/category/Medical-Company/Grupo-Farinter-Recursos-Humanos-1420256331334635/"><i className="fab fa-instagram text-coinsa"></i> Instagram </ExternalLink><br />
          <ExternalLink className="anchor" href="https://es-la.facebook.com/pages/category/Medical-Company/Grupo-Farinter-Recursos-Humanos-1420256331334635/"><i className="fab fa-twitter text-coinsa"></i> Twitter </ExternalLink><br />
          <ExternalLink className="anchor" href="https://es-la.facebook.com/pages/category/Medical-Company/Grupo-Farinter-Recursos-Humanos-1420256331334635/"><i className="fab fa-youtube text-coinsa"></i> YouTube </ExternalLink><br />
        {/* <h5 className="text-coinsa text-uppercase font-weigth bold text-informacion">Contáctanos</h5>
        <ExternalLink className="anchor" href="mailto:info@coinsa.hn"> <i class="fas fa-envelope"></i> info@coinsa.hn</ExternalLink> */}
        </div>
      </div> 
    </div>
  </div>
    <div className="row">
      <div className="col-md-12">
        <p className="text-center text-coinsa">
          Copyright © {yyyy} {' '} <b>COINSA. Todos los Derechos Reservados.</b>
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <p className="text-left text-coinsa">
          V1.0.0
        </p>
      </div>
    </div>
  </section>
</div>
);
export default Footer;