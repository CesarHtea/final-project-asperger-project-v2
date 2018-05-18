import React, { Component } from 'react';
import request from 'superagent';

// import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// const API_URL = 'http://localhost:3000'
const API_URL = 'https://aspergerdiagnosis.herokuapp.com'

class UserLogin extends Component {

  login = (e) => {

    e.preventDefault()

    console.log('que valor esta agarrando e.target.email.value')
    console.log(e.target.email.value)
    console.log('que valor esta agarrando e.target.password.value')
    console.log(e.target.password.value)

    const userData = {
      email: e.target.email.value,
      password: e.target.password.value
    }
        console.log(userData)
    request
      .post(`${API_URL}/auth/login`)
      .send(userData)
      .then(response => {
        console.log('respuesta al login')
        console.log(response.body)

        alert(`Welcome ${response.body.email}`)
        // this.props.fnActualizarStatePorUserLogin()
      })
      .catch(function(e) {
        console.log(e)
        alert("Hola, por favor intenta de nuevo. Si eres usuario nuevo, registrate.");
      })
  }

  render() {
    return (
      <div className='grid'>
        {/* <Paper className='login-material-ui-paper' zDepth={5} > */}
          <div className='login-form-container'>       
            <h2 className='login-title'>Ingresar</h2>
            
            <form className='form' onSubmit={ (e) => { this.login(e) } }>
              <div>
                <TextField
                  hintText='Your user (email)'
                  floatingLabelText='Your user (email)'
                  type='text'
                  name='email'
                  defaultValue='admin@aspergerproject.com'
                />
              </div>
              <div>
                <TextField
                  hintText='Password'
                  floatingLabelText='Password'
                  type='password'
                  name='password'
                  defaultValue='admin'
                />
              </div>
                <RaisedButton
                  className='login-button'
                  label='Login'
                  type='submit'
                  primary={true}
                />
            </form>
          </div>
        {/* </Paper> */}
       </div>
  	)
  }

}

export default UserLogin;