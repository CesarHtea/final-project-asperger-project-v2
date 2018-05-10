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
// import './App.css';

import Header from './components/Header';
import AllAnswersCuestionarioAQ from './components/AllAnswersCuestionarioAQ';
import ElementDetail from './components/ElementDetail';
import NewElement from './components/NewElement';
import NewUserSignIn from './components/NewUserSignIn';
import RegisteredUsers from './components/RegisteredUsers';
import UserLogIn from './components/UserLogIn';
import CuestionarioAQ from './components/CuestionarioAQ'
// import CurrentUser from './CurrentUser';
// import UserLogout from './UserLogout'

const API_URL = 'http://localhost:3000'

//--------- AuthService to fake API requests
const AuthService = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true,
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false,
    setTimeout(cb, 100)
  }
}
//----------

class Public extends Component {
  render() {
    return <h3>Public</h3>
  }
}

class Protected extends Component {
  render() {
    return <h3>Acceso autorizado a Protected</h3>
  }
}

class ProtectedVault extends Component {
  render() {
    return (
      <div>
        <h3>Acceso autorizado a Protected Vault</h3>
      </div>
      )
  }
}

// class Login extends Component {

//   state = {
//       redirectToReferrer: false
//     }
  
//   handleLogin = () => {
//     AuthService.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true
//       }))
//     })
//   }

//   render() {

//     const { redirectToReferrer } = this.state
//     const { from } = this.props.location.state || { from: { pathname: '/' } }

//     if ( redirectToReferrer === true) {
//       return <Redirect to={from} />
//     }

//     return (
//       <div>
//         <p>You must log in to view this page. Pagina desde la que se intento accesar: <strong>{ from.pathname }</strong></p>
//         <button onClick={this.handleLogin}>Log in</button>
//       </div>
//     )
//   }
// }


// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     AuthService.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }} />
//   )} />
// )

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

  componentWillMount() {
    request
      .get(`${API_URL}/auth/current`)
      .then((data) => {
        console.log(data)
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
    // this.props.history.push('/') 
  }

  render() {
    // console.log('##########')
    // console.log(this.state.user.id)
    // console.log('##########')
    return (
      <div>
          { this.state.loggedOut ===  !true 
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
                  <Route exact path='/public' component={Public} />
                  {/* <Route exact path='/login' component={Login} /> */}
                  <Route exact path='/allAnswersCuestionarioAQ' component={AllAnswersCuestionarioAQ} />
                  <Route exact path='/newElement' component={NewElement} />
                  <Route path='/talentos/:talentosId' component={ElementDetail} />
                  <Route path='/cuestionarioAQ' component={CuestionarioAQ} />
                  {/* <Route exact path='/newUserSignIn' component={NewUserSignIn} /> */}
                  <Route exact path='/registeredUsers' component={RegisteredUsers} />
                  {/* <Route exact path='/userLogIn' component={UserLogIn} /> */}
                  {/* <Route exact path='/currentUser' component={CurrentUser} /> */}
                  {/* <Route exact path='/userLogout' component={UserLogout} /> */}
                  {/* <PrivateRoute path='/protected' component={Protected} /> */}
                  {/* <PrivateRoute path='/protectedVault' component={ProtectedVault} /> */}
                </Switch>
              </div>
            : <div className='app-login-signin-paper-container'>
                <NewUserSignIn />
                <UserLogIn 
                  fnActualizarStatePorUserLogin={this.actualizarStatePorUserLogin}
                />
              </div>
          }
      </div>
    );
  }
}

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { 
//   Switch,
//   Route,
//   BrowserRouter 
//   } from 'react-router-dom';


// class Public extends Component {
//   render() {
//     return <h3>Public</h3>
//   }
// }

// class About extends Component {
//   render() {
//     return <h3>About react</h3>
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           <li>Public</li>
//           <li>Protected</li>
//         </ul>
//         <Switch>
//           <Route exact path='/about' component={About} /> 
//         </Switch>  
//       </div>
//     );
//   }
// }

ReactDOM.render(
    <Router>
      <MuiThemeProvider>
        <App/>
      </MuiThemeProvider>
    </Router>, document.getElementById('app-container'));


// ############################ DEFAULT #########################33

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';

// const DynamicRoute = (props) => {
//   const styleObj = {padding: '3rem', fontSize: '6vw', color: '#0E6655'}
//   return <h2 style={styleObj}>Dynamic Route: <u>{props.match.params.routeVal}</u></h2>
// }

// const DemoComponent = () => {
//   const styleObj = {padding: '3rem', fontSize: '6vw', color: 'slateblue'}
//   return <h2 style={styleObj}>Demo Route U</h2>
// }

// const NoMatch404 = () => {
//   const styleObj = {padding: '3rem', fontSize: '6vw', color: 'indianred'}
//   return <h2 style={styleObj}>No Match - 404</h2>
// }

// class App extends React.Component {
//   render (){
//     return <div>
//       <Switch>
//         <Route path='/ex/:routeVal' component={DynamicRoute}/>
//         <Route path='/demo' component={DemoComponent}/>
//         <Route component={NoMatch404}/>
//       </Switch>
//     </div>
//   }
// }

// ReactDOM.render(<BrowserRouter>
//   <App/>
// </BrowserRouter>, document.getElementById('app-container'));
