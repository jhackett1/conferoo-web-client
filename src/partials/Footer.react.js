import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component{

  render(){
    return(
      <div>
        <footer>
          <div className="container">
            <h3>About us</h3>
            <ul>
              <li><Link to="/policies">Cookie policy</Link></li>
              <li><Link to="/contact">Contact conference organisers</Link></li>
              <li>Log out</li>
            </ul>
            <div className="copyright-notice">&copy; Fast Stream Conference 2018. Developed by the conference digital team.</div>
          </div>
        </footer>
      </div>
    )
  }

}

export default Footer;
