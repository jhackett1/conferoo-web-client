import React from 'react';
import Nav from './Nav.react';
import { Link } from 'react-router-dom';

class Header extends React.Component{

  render(){
    return(
      <div>
        <header>
          <Link to="/" className="container">
            <img className="app-logo" alt="logo" src="/logo.svg"/>
            <h1>Fast Stream <br/>Conference <span>2018</span></h1>
          </Link>
        </header>
        <Nav/>
      </div>
    )
  }

}

export default Header;
