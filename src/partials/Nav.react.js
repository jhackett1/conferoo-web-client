import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{

  render(){
    return(
      <nav>
        <div className="container">
          <ul>
            <li><Link to="/updates">Updates</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/polls">Polls</Link></li>
            <li><Link to="/info">Info</Link></li>
          </ul>
        </div>
      </nav>
    )
  }

}

export default Nav;
