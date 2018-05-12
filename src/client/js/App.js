import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import BoardAdmin from './components/BoardAdmin';
import BoardPsico from './components/BoardPsico';
import BoardPx from './components/BoardPx';
import CuestionarioAQAllAnswers from './components/CuestionarioAQAllAnswers';
import ElementDetail from './components/ElementDetail';
import UserSignIn from './components/UserSignIn';
import RegisteredUsers from './components/RegisteredUsers';
import UserLogIn from './components/UserLogIn';
import CuestionarioAQ from './components/CuestionarioAQ'

const API_URL = 'http://localhost:3000'

class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedOut: true,
      display: 'none',
    };
  }

  componentDidMount() {
    request
      .get(`${API_URL}/auth/current`)
      .then((data) => {
        // console.log(data)
        if (typeof data.body.email === 'string') {
          this.setState({
            user: data.body,
            loggedOut: false,
            display: ''
          })
        }
      })
      .catch(function(e){
        console.log(e)
      })
  };

  actualizarStatePorUserLogin = () => {
    request
      .get(`${API_URL}/auth/current`)
      .then((data) => {
        this.setState({
          user: data.body.email,
          userId: data.body.id,
          loggedOut: false,
          display: ''
        })

        request
          .get(`${API_URL}/api/typeOfUser/${data.body.id}`)
          .then((data) => {
            this.setState({
              admin: data.body.admin,
              psico: data.body.psicologo,
              px: data.body.px
            })
          })
          .catch(function(e){
            console.log(e)
          });

      })
      .catch(function(e){
        console.log(e)
      });
  };    

  actualizarStatePorUserLogout = (loggedOut) => {
    this.setState({
      user: [],
      display: 'none',
      loggedOut: loggedOut
    });
  }

  render() {
    return (
      <div>
          { this.state.loggedOut ===  !true && this.state.admin ===  1
            ?  
              <div>
                <div className='app-header-container'>
                  <Header
                    currentId={this.state.userId}
                    currentUser={this.state.user}
                    admin={this.state.admin}
                    fnActualizarStatePorUserLogout={this.actualizarStatePorUserLogout}
                    displaynone={this.state.display}
                  />
                </div>
                <Switch>
                  <Route exact path='/' component={BoardAdmin} />
                  <Route exact path='/cuestionarioAQAllAnswers' component={CuestionarioAQAllAnswers} />
                  <Route path='/talentos/:talentosId' component={ElementDetail} />
                  <Route path='/cuestionarioAQ' component={CuestionarioAQ} />
                  <Route exact path='/registeredUsers' component={RegisteredUsers} />
                </Switch>
              </div>
            : null 
         }
         { this.state.loggedOut ===  !true && this.state.psico ===  1
             ?  
              <div>
                <div className='app-header-container'>
                  <Header
                    currentId={this.state.userId}
                    currentUser={this.state.userl}
                    psico={this.state.psico}
                    fnActualizarStatePorUserLogout={this.actualizarStatePorUserLogout}
                    displaynone={this.state.display}
                  />
                </div>
                <Switch>
                  <Route exact path='/' component={BoardPsico} />
                  <Route exact path='/cuestionarioAQAllAnswers' component={CuestionarioAQAllAnswers} />
                  <Route path='/talentos/:talentosId' component={ElementDetail} />
                  <Route path='/cuestionarioAQ' component={CuestionarioAQ} />
                  <Route exact path='/registeredUsers' component={RegisteredUsers} />
                </Switch>
              </div>
            : null 
         }
         { this.state.loggedOut ===  !true && this.state.px === 1
             ?  
              <div>
                <div className='app-header-container'>
                  <Header
                    currentId={this.state.userId}
                    currentUser={this.state.user}
                    px={this.state.px}
                    fnActualizarStatePorUserLogout={this.actualizarStatePorUserLogout}
                    displaynone={this.state.display}
                  />
                </div>
                <Switch>
                  <Route exact path='/' component={BoardPx} />
                  <Route exact path='/cuestionarioAQAllAnswers' component={CuestionarioAQAllAnswers} />
                  <Route path='/talentos/:talentosId' component={ElementDetail} />
                  <Route path='/cuestionarioAQ' component={CuestionarioAQ} />
                  <Route exact path='/registeredUsers' component={RegisteredUsers} />
                </Switch>
              </div>
            : null 
         }
         { this.state.loggedOut ===  true
            ?
              <div className='app-login-signin-paper-container'>
                <UserSignIn />
                <UserLogIn 
                  fnActualizarStatePorUserLogin={this.actualizarStatePorUserLogin}
                />
              </div>
            : null 
          }
      </div>
    );
  }
}

ReactDOM.render(
    <MuiThemeProvider>
      <Router>
        <App/>
      </Router>
    </MuiThemeProvider>, document.getElementById('app-container'));
