import React, { Component } from 'react';
import request from 'superagent';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const API_URL = 'http://localhost:3000'

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
        // console.log(response.body.id)
//------------- esto hay que meterlo en signin
        // request
        //   .post(`${API_URL}/api/registerNewSetOfPrivilegesForNewUser`)
        //   .send({
        //      userId: response.body.id,
        //      admin: 1,
        //      psicologo: 1
        //      px: 1
        //   })
        //   .then( function() { } )
        //   .catch(function (e) {
        //     console.log(e)
        //   })
        // }
//--------------
      })
      .catch(function(e) {
        console.log(e)
        alert('Al parecer el usuario ya esta registrado. Intenta Log In o intenta registrarte con otro mail')
      })
  }

  render() {
    return (
      <div className='grid'>
        <Paper className='login-material-ui-paper' zDepth={5} >
          <div className='login-form-container'>
            <h2 className='login-title'>Registrarme (Sign In)</h2>
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
              />
            </form>
          </div>
        </Paper> 
      </div>
    )
  }

}

export default NewUserSignIn;