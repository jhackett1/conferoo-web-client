import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import userService from './services/userService';
import ReactGA from 'react-ga';

import Login from './views/login/Login.react';
import LoginCallback from './views/login/LoginCallback.react';
import Onboarding from './views/onboarding/Onboarding.react';

// Polyfill for array.include()
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, "includes", {
    enumerable: false,
    value: function(obj) {
        var newArr = this.filter(function(el) {
          return el === obj;
        });
        return newArr.length > 0;
      }
  });
}

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

// Analytics
ReactGA.initialize('UA-91311733-4');
ReactGA.pageview(window.location.pathname + window.location.search);

registerServiceWorker();
