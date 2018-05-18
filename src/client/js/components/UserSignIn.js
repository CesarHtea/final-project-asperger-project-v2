import React, { Component } from 'react';
import request from 'superagent';

// import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const API_URL = 'http://localhost:3000'
// const API_URL = 'https://aspergerdiagnosis.herokuapp.com'

class NewUserSignIn extends Component {

  createNewUser = (e) => {

    e.preventDefault()

    const newUserData = {
      email: e.target.signinEmail.value,
      password: e.target.signinPassword.value
    }

    request
      .post(`${API_URL}/auth/register`)
      .send(newUserData)
      .then(response => {        
        alert('Nuevo usuario registrado. Intenta Log In')
        const newUserId = response.body.id
        request
          .post(`${API_URL}/api/typeOfUser`)
          .send({
             userId: newUserId,
             admin: 0,
             psicologo: 0,
             px: 1
          })
          .then( function() { } )
          .catch(function (e) {
            console.log(e)
          })
        request
          .post(`${API_URL}/api/formulariosBoard`)
          .send({
             userId: newUserId,
             aqCoeficienteDelEspectro: 1,
             eqCoeficienteDeEmpatia: 0,
             srsEscalaDeSensibilidadSocial: 0,
             sqCoeficienteDeSistematizacion: 0,
             pdq4CuestionarioDePersonalidad: 0,
             historiaDelDesarrollo: 0,
             historiaDelDesarrolloVersionPadres: 0,
             inventarioDeAnsiedadDeBeck: 0,
             inventarioDeDepresionDeBeck: 0
          })
          .then( function() { } )
          .catch(function (e) {
            console.log(e)
          })
      })
      .catch(function(e) {
        console.log(e)
        alert('Al parecer el usuario ya esta registrado. Intenta Log In o intenta registrarte con otro mail')
      })
  }

  render() {
    return (
      <div className='grid'>
        {/* <Paper className='login-material-ui-paper' zDepth={5} > */}
          <div className='login-form-container'>
            <h2 className='login-title'>Registrarme</h2>
            <form className='form' onSubmit={ (e) => { this.createNewUser(e) } }>
              <div>
                <TextField
                  hintText='Your email'
                  floatingLabelText='Your email'
                  defaultValue='x@aspergerproject.com'
                  name='signinEmail'
                />
              </div>
              <div>
                <TextField
                  hintText='Password Field'
                  floatingLabelText='Password'
                  type='password'
                  defaultValue='x'
                  name='signinPassword'
                />
              </div>
              <RaisedButton
                className='login-button'
                label="Signin"
                type='submit'
                primary={true}
              />
            </form>
          </div>
        {/*</Paper> */}
      </div>
    )
  }

}

export default NewUserSignIn;