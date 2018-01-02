import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component{

  render(){
    return(
      <section className="banner">
        <div className="container">
          <img alt="Caution icon" src="/caution.svg"/>
          <span>This app is in beta. If you have any issues, <Link to="/contact">let us know</Link>.</span>
        </div>
      </section>
    )
  }

}

export default Banner;
