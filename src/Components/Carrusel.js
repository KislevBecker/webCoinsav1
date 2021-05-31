/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import c1 from '../Img/carrusel1.png';
import c2 from '../Img/carrusel2.png';
import c3 from '../Img/carrusel3.png';

const Carrusel= ()=>{
  return(
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img className="img-fluid w-100 h-50" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
    aria-controls="profile" aria-selected="false" src={c1}  />
    
    </div>
    <div className="carousel-item">
    <img className="img-fluid w-100 h-50" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
    aria-controls="profile" aria-selected="false" src={c2}  />
    
    </div>
    <div className="carousel-item">
    <img className="img-fluid w-100 h-50" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
    aria-controls="profile" aria-selected="false" src={c3}  />
    
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
export default Carrusel