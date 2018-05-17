import React, { Component } from 'react';
import request from 'superagent';

import RegisteredUserIndividual from './RegisteredUserIndividual'

import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';

const API_URL = 'http://localhost:3000'

class CuestionariosControlBoard extends Component {
  
  constructor() {
    super();

    this.state = {
      users: [],
      disabled: true,
      mensajeResponsabilidad: 'Habilite este interruptor para modificar los permisos de usuario:',
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

  apagarToogleDeSeguridad = () => {
    if ( this.state.disabled === true ) {
      alert('RECUERDE: "Un gran poder conlleva una gran responsabilidad".');
      this.setState({
        disabled: false,
        mensajeResponsabilidad: 'RECUERDE: "Un gran poder conlleva una gran responsabilidad". Cada persona sólo puede pertenecer a un tipo de usuario'
      })
    } else {
      this.setState({
        disabled: true,
        mensajeResponsabilidad: 'Habilite este interruptor para modificar los permisos de usuario:'
      })
    }
  }

  cambiarPermisoDeUsuarioAAdmin = info => {
    request
      .put(`${API_URL}/api/typeOfUser/${info.id}`)
      .send({
         admin: 1,
         psicologo: 0,
         px: 0
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
            <h1>ANTES PERMISOS DE USUARIO, AHORA HABILITACION DE CUESTIONARIOS</h1>
            <div className='type-of-users-toggle-warning type-of-users-toggle'>
              <div>{this.state.mensajeResponsabilidad}</div>
              <div>
                <Toggle
                  // label="Simple"
                  defaultToggled={false}
                  onToggle={ (e) => { this.apagarToogleDeSeguridad()} }
                />
              </div>
            </div>
            <table className='table'>
              <thead>
                <tr>
                  <td>Registered Users</td>
                  <td className='tdStyle'>Admon</td>
                  <td className='tdStyle'>Psi</td>
                  <td className='tdStyle'>Paciente</td>
                </tr>
              </thead>
              <tbody>
                {this.state.users.slice(0).reverse().map((user, index) => {
                  return ( 
                    <RegisteredUserIndividual
                      key={index}
                      info={user} 
                      disabled={this.state.disabled}
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