import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component{

  render(){
    return(
      <nav>
        <div className="container">
          <ul>
            <li><NavLink to="/updates">Updates</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/polls">Polls</NavLink></li>
            <li><NavLink to="/info">Info</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }

}

export default Nav;
