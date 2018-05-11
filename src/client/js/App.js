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
      user: [],
      userId: '',
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
          user: data.body,
          // userId: data.body.id,
          loggedOut: false,
          display: ''
        })
      })
      .catch(function(e){
        console.log(e)
      })
  };    

  actualizarStatePorUserLogout = (loggedOut) => {
    this.setState({
      user: [],
      display: 'none',
      loggedOut: loggedOut
    });
  }

  render() {
    // console.log('##########')
    // console.log(this.state.user.id)
    // console.log('##########')
    return (
      <div>
          { this.state.loggedOut ===  !true && this.state.user.id ===  1
            ?  
              <div>
                <div className='app-header-container'>
                  <Header
                    currentId={this.state.user.id}
                    currentUser={this.state.user.email}
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
         { this.state.loggedOut ===  !true && this.state.user.id ===  2
             ?  
              <div>
                <div className='app-header-container'>
                  <Header
                    currentId={this.state.user.id}
                    currentUser={this.state.user.email}
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
         { this.state.loggedOut ===  !true && this.state.user.id ===  3
             ?  
              <div>
                <div className='app-header-container'>
                  <Header
                    currentId={this.state.user.id}
                    currentUser={this.state.user.email}
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
