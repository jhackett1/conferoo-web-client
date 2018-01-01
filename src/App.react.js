import React, { Component } from 'react';
import Header from './partials/Header.react';
import Footer from './partials/Footer.react';
import { Route } from 'react-router-dom';
import './styles/app.css';

import Updates from './views/Updates.react';
import InfoList from './views/info/InfoList.react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route path="/updates" component={Updates}/>
        <Route path="/info" component={InfoList}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
