import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Login from './views/login/Login.react';

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <App/>
    </Switch>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
