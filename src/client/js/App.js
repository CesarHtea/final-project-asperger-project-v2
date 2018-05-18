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
import Paper from 'material-ui/Paper';
// import Divider from 'material-ui/Divider';

import Header from './components/Header';
import BoardAdmin from './components/BoardAdmin';
import BoardPsico from './components/BoardPsico';
import BoardPx from './components/BoardPx';
import CuestionarioAQAllAnswers from './components/CuestionarioAQAllAnswers';
import CuestionarioAQAllAnswersStadistics from './components/CuestionarioAQAllAnswersStadistics';
import ElementDetail from './components/ElementDetail';
import UserSignIn from './components/UserSignIn';
import RegisteredUsers from './components/RegisteredUsers';
import UserLogIn from './components/UserLogIn';
import CuestionarioAQ from './components/CuestionarioAQ'
import CuestionariosControlBoard from './components/CuestionariosControlBoard'
import NoMatch from './components/NoMatch'

// const API_URL = 'http://localhost:3000'
const API_URL = 'https://aspergerdiagnosis.herokuapp.com'

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
        console.log('--- data.body request current desde app.js linea 66 ')
        console.log(data.body)
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
    // console.log('----- enviado desde App ----')
    // console.log(this.state)
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
                  <Route exact path='/cuestionarioAQAllAnswersStadistics' component={CuestionarioAQAllAnswersStadistics} />
                  <Route path='/talentos/:talentosId' component={ElementDetail} />
                  <Route path='/cuestionarioAQ' component={CuestionarioAQ} />
                  <Route exact path='/registeredUsers' component={RegisteredUsers} />
                  <Route component={NoMatch} />
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
                  <Route exact path ='/cuestionariosControlBoard' component={CuestionariosControlBoard} />
                  <Route component={NoMatch} />
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
                  <Route component={NoMatch} />
                </Switch>
              </div>
            : null 
         }
         { this.state.loggedOut ===  true
            ?
              <div className='portada-container'>
                <div className='portada'>
                   <h3>"Creí vivir en un pueblo fantasma, <br />hasta que me di cuenta que el fantasma era yo".</h3>
                   <p>~ Dr. Armando Hernández Cruz</p>
                </div>
                <div className='app-login-signin-paper-container'>
                  <Paper className='login-material-ui-paper' zDepth={5} >
                    <UserLogIn 
                      fnActualizarStatePorUserLogin={this.actualizarStatePorUserLogin}
                    />
                    {/* <Divider /> */}
                    <UserSignIn />
                  </Paper>
                </div>
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
