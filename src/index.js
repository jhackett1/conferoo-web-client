import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// import Axios from 'axios';
// import config from './config';
// import userService from './services/userService';

import Login from './views/login/Login.react';
import LoginCallback from './views/login/LoginCallback.react';
import Onboarding from './views/onboarding/Onboarding.react';

class Index extends React.Component{

  // componentWillMount(){
  //   Axios({
  //     method: 'get',
  //     url: config.host + 'users/',
  //     headers: {
  //       Authorization: userService.getToken()
  //     }
  //   })
  //     .then(function(response){
  //       console.log("success")
  //     })
  //     .catch(function(err){
  //       console.log("catching")
  //     })
  // }

  render(){


    return (
      <Router>
        <Switch>
          <Route exact path="/login/callback" component={LoginCallback}/>
          <Route exact path="/login" component={Login}/>
          <Route path="/onboarding" component={Onboarding}/>
          <App/>
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

registerServiceWorker();
