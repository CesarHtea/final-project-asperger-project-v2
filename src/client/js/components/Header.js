import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const API_URL = 'http://localhost:3000'
// const API_URL = 'https://aspergerdiagnosis.herokuapp.com'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  logout = (e) => {
    request
      .get(`${API_URL}/auth/logout`)
      .then((response) => {
        const loggedOut = response.body.loggedOut
        this.props.fnActualizarStatePorUserLogout(loggedOut)
      })
      .catch(function(e){
        console.log(e)
      })
  }

    render() {
    return (
      <div className='header-container'>

        <div className='header-botones-container'>

          { this.props.admin === 1 ?
           
             <div className='grid'>

                <div>
                  <Link to='/registeredUsers'>
                    <RaisedButton
                      className='header-button'
                      label="Permisos de Acceso"
                       // onClick={this.handleToggle}
                    />
                  </Link>
                </div>
              
                <div>
                  <RaisedButton
                    className='header-button'
                    label="Menú"
                     onClick={this.handleToggle}
                  />
                </div>
                <Drawer
                  docked={false}
                  width={300}
                  openSecondary={true}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}
                >
                  <Link to='/cuestionarioAQ' className='no-decoration-text'><MenuItem onClick={this.handleClose}>Cuestionario AQ (usuario Px)</MenuItem></Link>
                  <Link to='/cuestionarioAQAllAnswers' className='no-decoration-text'><MenuItem onClick={this.handleClose}>CuestionarioAQ (Todas las respuestas)</MenuItem></Link>
                  <Link to='/cuestionarioAQAllAnswersStadistics' className='no-decoration-text'><MenuItem onClick={this.handleClose}>CuestionarioAQ (Estadísticas)</MenuItem></Link>
                  <Link to='/registeredUsers' className='no-decoration-text'><MenuItem onClick={this.handleClose}>Permisos de usuario</MenuItem></Link>
                </Drawer>
                
            </div>

            :  null

          }

          { this.props.psico === 1 ?
           
             <div className='grid'>
              
                <div>
                  <RaisedButton
                    className='header-button'
                    label="Menú"
                     onClick={this.handleToggle}
                  />
                </div>
                <Drawer
                  docked={false}
                  width={300}
                  openSecondary={true}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}
                >
                 <Link to='/cuestionarioAQAllAnswers' className='no-decoration-text'><MenuItem onClick={this.handleClose}>CuestionarioAQ (Todas las respuestas)</MenuItem></Link>
                 <Link to='/cuestionariosControlBoard' className='no-decoration-text'><MenuItem onClick={this.handleClose}>Cuestionarios habilitados</MenuItem></Link>
                </Drawer>

            </div>

            :  null

          }

          <div>
              <RaisedButton
                className='header-button'
                label="Log Out"
                onClick={this.logout}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
