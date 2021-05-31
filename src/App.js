import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import ScrollToTop from 'react-router-scroll-top';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import HomePage from '../src/Pages/Home/HomePage';
import Header from '../src/Components/Header';
import Navbar from '../src/Components/Navbar';
import Footer from '../src/Components/Footer';
import SobreNosotros from './Pages/Nosotros/SobreNosotros';
import Dashboard from './Pages/Admin/Dashboard';
import AddImaagesPromo from './Pages/Admin/AddImaagesPromo';
import Login from './Pages/Auth/Login';


function App() {
  return (
    <div >
    <BrowserRouter>
    <Header />
    <Navbar />
      <div className="container">
        <ScrollToTop>
          <Route exact path="/" component={HomePage} />
          <Route path="/Sobre-nosotros" component={SobreNosotros} />
          <Route path="/Admin-dashboard" component={Dashboard} />
          <Route path="/Agregar-imagen-ofertas" component={AddImaagesPromo} />
          <Route path="/Login" component={Login} />
          {/* <Route path="/Proveedores-Farma" component={Agregar} />
          <Route path="/Proveedores-Consumo" component={Consumo} />
          <Route path="/Unete-a-nosotros" component={Unete} /> */}
          {/* <Route path="/Quienes-somos" component={QuienesSomos} /> */}
          {/* <Route path="/Valores-y-lineamientos" component={ValoresLineamientos} />
          <Route path="/Codigo-de-etica" component={CodigoEtica} />
          <Route path="/Contactanos" component={Contactanos} />
          <Route path="/RSE-Fundacion-Kielsa" component={RSEFundacionKielsa} />
          <Route path="/Empresas" component={Empresas} />
          <Route path="/Acerca-de-nosotros" component={QuienesSomos} />
          <Route path="/Mision-y-vision" component={MisionVision} /> */}
        </ScrollToTop>
      </div>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
