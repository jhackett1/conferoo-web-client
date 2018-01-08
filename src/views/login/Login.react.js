import React from 'react';
import '../../styles/login.css';

import config from '../../config';

class Login extends React.Component{
  handleClick(){
    var urlBuilder = [];
    urlBuilder.push('response_type=code', `client_id=${config.google_client_id}`, `redirect_uri=${window.location.origin}/login/callback`, 'scope=profile email');
    const url = "https://accounts.google.com/o/oauth2/v2/auth?" + urlBuilder.join('&');
    // Open the popup window
    window.location.href = url;
  }

  componentWillMount(){
    document.title = "Fast Stream Conference 2018";
  }

  render(){

    return(
    <main className="login">
      <div className="branding">
        <img className="app-logo" alt="logo" src="/logo.svg"/>
        <h1>Fast Stream <br/>Conference <span>2018</span></h1>
      </div>
      <a className="button" onClick={this.handleClick}><i className="fa fa-google"></i> Log in with Google</a>
      <p>Please log in with your Google account, ideally a @faststream.civilservice.gov.uk address.</p>
      <p>Having trouble logging in?<br/><a href="mailto:info@fsconference.co.uk">Let us know.</a></p>
    </main>
    )
  }
}

export default Login;
