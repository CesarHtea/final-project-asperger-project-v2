import React, { Component } from 'react';
import request from 'superagent';

import CuestionariosControlBoardElementoIndividual from './CuestionariosControlBoardElementoIndividual'

import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';

const API_URL = 'http://localhost:3000'
// const API_URL = 'https://aspergerdiagnosis.herokuapp.com'

class CuestionariosControlBoard extends Component {
  
  constructor() {
    super();

    this.state = {
      users: [],
      ultimoCambioRealizado: ''
    };
  }

  componentDidMount() {
    // esta peticion es para renderizar usuarios
    request
      .get(`${API_URL}/api/registeredUsers`)
      .then((data) => {
        this.setState({
          users: [...data.body]
        })
      })
      .catch(function(e){
        console.log(e)
      })
  };

  cambiarPermisoDeUsuarioAAdmin = info => {
    request
      .put(`${API_URL}/api/formulariosBoard/${info.id}`)
      .send({
        aqCoeficienteDelEspectro: '',
        eqCoeficienteDeEmpatia: '',
        srsEscalaDeSensibilidadSocial: '',
        sqCoeficienteDeSistematizacion: '',
        pdq4CuestionarioDePersonalidad: '',
        historiaDelDesarrollo: '',
        historiaDelDesarrolloVersionPadres: '',
        inventarioDeAnsiedadDeBeck: '',
        inventarioDeDepresionDeBeck: ''
      })
      .then(function(res) { } )
      .catch(function(e) {
        console.log(e)
      })
    request
    .get(`${API_URL}/api/registeredUsers`)
    .then((data) => {
      this.setState({
        users: [...data.body],
        ultimoCambioRealizado: 'admon'
      })
    })
    .catch(function(e){
      console.log(e)
    })
  alert('Actualizacion de permiso realizado en usuario' + info.email);    
  this.props.history.push('/')
  }

  cambiarPermisoDeUsuarioAPsicologo = info => {
    request
      .put(`${API_URL}/api/typeOfUser/${info.id}`)
      .send({
         admin: 0,
         psicologo: 1,
         px: 0
      })
      .then( function() { } )
      .catch(function(e) {
        console.log(e)
      })
    request
      .get(`${API_URL}/api/registeredUsers`)
      .then((data) => {
        this.setState({
          users: [...data.body],
          ultimoCambioRealizado: 'psico'
        })
      })
      .catch(function(e){
        console.log(e)
      })
    alert('Actualizacion de permiso realizado en usuario' + info.email);    
    this.props.history.push('/')
  } 

  cambiarPermisoDeUsuarioAPx = info => {
    request
      .put(`${API_URL}/api/typeOfUser/${info.id}`)
      .send({
         admin: 0,
         psicologo: 0,
         px: 1
      })
      .then( function() { } )
      .catch(function(e) {
        console.log(e)
      })
    request
      .get(`${API_URL}/api/registeredUsers`)
      .then((data) => {
        this.setState({
          users: [...data.body],
          ultimoCambioRealizado: 'px'
        })
      })
      .catch(function(e){
        console.log(e)
      })
    alert('Actualizacion de permiso realizado en usuario' + info.email);    
    this.props.history.push('/')
  }

  render() {
    return (
        <Paper className='permisos-de-usuarios-table-paper-container' zDepth={5}>
            <h1>HABILITACION DE CUESTIONARIOS</h1>
            <table className='table'>
              <thead>
                <tr>
                  <td>Tests habilitados</td>
                  <td className='tdStyle'>Admon</td>
                  <td className='tdStyle'>Psi</td>
                  <td className='tdStyle'>Paciente</td>
                  <td className='tdStyle'>Aqui va un test</td>
                </tr>
              </thead>
              <tbody>
                {this.state.users.slice(0).reverse().map((user, index) => {
                  return ( 
                    <CuestionariosControlBoardElementoIndividual
                      key={index}
                      info={user} 
                      cambiarPermisoDeUsuarioAAdmin={this.cambiarPermisoDeUsuarioAAdmin}
                      cambiarPermisoDeUsuarioAPsicologo={this.cambiarPermisoDeUsuarioAPsicologo}
                      cambiarPermisoDeUsuarioAPx={this.cambiarPermisoDeUsuarioAPx}
                    />
                  )
                })}
              </tbody>
            </table>
        </Paper>
    )
  }
}

export default CuestionariosControlBoard;