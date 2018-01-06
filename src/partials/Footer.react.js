import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import userService from '../services/userService';

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut(){
    // Clear the JSON token from localStorage
    userService.removeToken();
    // And redirect to the login route
    this.props.history.push('/login')
  }

  render(){

    return(
      <div>
        <footer>
          <div className="container">
            <h3>About us</h3>
            <ul>
              <li><Link to="/policies">Privacy policy</Link></li>
              <li><Link to="/contact">Contact the organisers</Link></li>
              <li><a href="http://fsconference.co.uk">Website</a></li>
              <li><a onClick={this.logOut}>Log out</a></li>
            </ul>
            <div className="copyright-notice">&copy; Fast Stream Conference 2018. Developed by the conference digital team.</div>
          </div>
        </footer>
      </div>
    )
  }

}

export default Footer;
