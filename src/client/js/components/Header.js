import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const API_URL = 'http://localhost:3000'

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
          { this.props.currentId === 2
           
           ? <div className='grid'>
              <div className={this.props.display}>
                <RaisedButton
                  className='header-button'
                  label="Menú"
                   onClick={this.handleToggle}
                />
              </div>
              <div className={this.props.display}>
                  <RaisedButton
                    className='header-button'
                    label="Log Out"
                    onClick={this.logout}
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
                <Link to='/allAnswersCuestionarioAQ' className='no-decoration-text'><MenuItem onClick={this.handleClose}>AllAnswersCuestionarioAQ (Psi)</MenuItem></Link>
                <Link to='/registeredUsers' className='no-decoration-text'><MenuItem onClick={this.handleClose}>RegisteredUsers (admin)</MenuItem></Link>
              </Drawer>
            </div>

           : <div className={this.props.display}>
              <RaisedButton
                className='header-button'
                label="Log Out"
                onClick={this.logout}
               />
            </div>
          }

        </div>  
      </div>
    );
  }
}

export default Header;
