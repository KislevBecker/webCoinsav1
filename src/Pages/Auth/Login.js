/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Img/Logo Coinsa-01.png';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailValid: true,
      password: '',
      passwordValid: true,
      showPassword: false,
      loading: false,
    };
  }

  setShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  }
  render() {
    const {
      email, emailValid, password, passwordValid, showPassword, loading
    } = this.state;
    return (
      <div>
        <section className="pt-5 pb-5">
          <div className="container">
            <div className="row">
             <div className="col-md-6">
             <div id="login-box" className="col-lg-12 pt-2">
                <div id="tarjeta" className="card" style={{borderRadius: '15px'}}>
                  {/* <div className="text-center mt3search">
                    <img src="/img/logobordew.png" alt="logo" style={{ width: '200px' }} />
                  </div> */}
                  <h2 className="font-weight-bold white center mt-2 mb-3">
                    Administración de la página
                  </h2>
                  <br />
                  {/* <h3 id="encabezado-login2" className="font-weight-bold white">
                    Iniciar sesión
                  </h3> */}
                  <div className="card-body text-center">
                    <form
                      action=""
                      method="post"
                      className="php-email-form"
                      data-aos="fade-up"
                      onSubmit={this.loginUser}
                      >
                        <div className="form-row">
                          <input type="text" placeholder="Nombre" className="form-control"/>
                        </div>
                      <div className="form-group pt-4">
                        <div className="d-flex flex-row">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            name="pass"
                            placeholder="Contraseña..."
                            className="form-control"
                            id="pass"
                            data-rule="minlen:4"
                            data-msg="Please enter at least 4 chars"
                            value={password}
                            onChange={event => this.handleTextInput(event, 'password')}
                            />
                          <button className="btn btn-transparent rounded-left-search ojo" type="button" onClick={this.setShowPassword}>
                            {showPassword
                              ? <i className="fas fa-eye-slash" /> : <i className="fas fa-eye" />}
                          </button>
                        </div>
                        <div className="w-100 text-left ml-2">
                          {passwordValid ? (
                            <></>
                          ) : (
                            <span className="h6 text-white text-left">
                              Este campo es necesario para iniciar sesión
                            </span>
                           )} 
                        </div>
                      </div>
                      {
                        loading ? (
                          // <Loader />
                          <div className="spin"></div>
                        ) : (
                          // <button className="btn btn-success btn-lg rounded-pill mt-3 mt-3" type="submit">
                          //   Ingresar
                          // </button>
                          <Link className="btn btn-success btn-lg rounded-pill mt-3 mt-3" to ="/Admin-dashboard">Ingresar</Link>
                          
                         )
                      } 

                      <br />
                    </form>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            
             </div>
             <div className="col-md-6">
               <div className="card  bg-radial" style={{borderRadius: '15px'}}>
               <img src={Logo} className="image-fluid center"/>
                <br />
                <div className="card-body">
                <h2 className="text-center">
                  Bienvenido al módulo de administración de la página corporativa de COINSA
                </h2>
                </div>
                </div>
             </div>
             </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Login;