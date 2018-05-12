import React, { Component } from 'react';
import request from 'superagent';

import RegisteredUserIndividual from './RegisteredUserIndividual'

import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';

const API_URL = 'http://localhost:3000'

class AllRegisteredUsers extends Component {
  
  constructor() {
    super();

    this.state = {
      users: [],
      disabled: true,
      mensajeResponsabilidad: 'Habilite este interruptor para modificar los permisos de usuario:' 
    };
  }

  componentDidMount() {
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

  habilitarToogles = () => {
    if ( this.state.disabled === true ) {
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

  cambiarPermisoDeUsuario = info => {
    // console.log('---consoleado desde Registered Users Parent')
    // console.log('se supone que cacha el valor del userId---')
    // console.log(info)
    console.log('id:' + info.id)
    // console.log(info.typeOfUser)
    // console.log('admin:' + info.typeOfUser[0].admin)
    // console.log('psico:' + info.typeOfUser[0].psicolog)
    // console.log('px:' + info.typeOfUser[0].px)
    // usar un metodo put par actualizar el valor del permiso

    request
      .put(`${API_URL}/api/typeOfUser/${info.id}`)
      .send({
         admin: 1,
         psicologo: 1,
         px: 1
      })
      .then(function() {
        alert('Permisos de Usuario, actualizando...')
        // this.props.history.push('/')
      })
      .catch(function(e) {
        console.log(e)
      })
  }

// esto hay que meterlo en login

    // request
    //   .post(`${API_URL}/api/typeOfUser`)
    //   .send({
    //      admin: 1,
    //      psicologo: 1
    //      px: 1
    //   })
    //   .then(function() {
    //     alert('Permisos de Usuario, actualizando...')
    //   })
    //   .catch(function (e) {
    //     console.log(e)
    //   })
    // }

// ******************
// ******************


// *****************
// ******************




  render() {
    return (
      <Paper className='permisos-de-usuarios-table-paper-container' zDepth={5}>
          <h1>PERMISOS DE USUARIO</h1>
          <div className='type-of-users-toggle-warning type-of-users-toggle'>
            <div>{this.state.mensajeResponsabilidad}</div>
            <div>
              <Toggle
                // label="Simple"
                defaultToggled={false}
                onToggle={ (e) => { this.habilitarToogles()} }
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
                    fn={this.cambiarPermisoDeUsuario} 
                  />
                )
              })}
            </tbody>
          </table>
      </Paper>
    )
  }
}

export default AllRegisteredUsers;