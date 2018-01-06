import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import userService from './services/userService';


import Login from './views/login/Login.react';
import LoginCallback from './views/login/LoginCallback.react';
import Onboarding from './views/onboarding/Onboarding.react';

class Index extends React.Component{

  render(){

    const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      userService.checkToken() ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  );


    return (
      <Router>
        <Switch>
          <Route exact path="/login/callback" component={LoginCallback}/>
          <Route exact path="/login" component={Login}/>
          <PrivateRoute path="/onboarding" component={Onboarding}/>
          <PrivateRoute path="/" component={App}/>
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

registerServiceWorker();
