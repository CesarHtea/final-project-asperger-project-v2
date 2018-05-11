import React, { Component } from 'react';
import request from 'superagent';

import RegisteredUserIndividual from './RegisteredUserIndividual'

import Paper from 'material-ui/Paper';

const API_URL = 'http://localhost:3000'

class AllRegisteredUsers extends Component {
  
  constructor() {
    super();

    this.state = {
      users: []
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

  render() {
    return (
      <Paper className='permisos-de-usuarios-table-paper-container' zDepth={5}>
        <div>
          <h1>REGISTERED USERS</h1>
          <table className='table'>
            <thead>
              <tr>
                <td>Registered Users</td>
                <td className='tdStyle'>Admon</td>
                <td className='tdStyle'>Psico</td>
                <td className='tdStyle'>Paciente</td>
              </tr>
            </thead>
            <tbody>
              {this.state.users.slice(0).reverse().map((user, index) => {
                return  <RegisteredUserIndividual key={index} info={user} />
              })}
            </tbody>
          </table>
        </div>
      </Paper>
    )
  }

}

export default AllRegisteredUsers;