import React, { Component } from 'react';
import Banner from './partials/Banner.react';
import Header from './partials/Header.react';
import Footer from './partials/Footer.react';
import { Route } from 'react-router-dom';
import './styles/app.css';

import Dashboard from './views/Dashboard.react';
import UpdateList from './views/updates/UpdateList.react';
import UpdateSingle from './views/updates/UpdateSingle.react';
import Events from './views/events/Events.react';
import Polls from './views/polls/Polls.react';
import Info from './views/info/Info.react';
import Contact from './views/Contact.react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
        <Header/>

        <Route exact path="/update/:id" component={UpdateSingle}/>
        <Route exact path="/updates" component={UpdateList}/>

        <Route path="/events" component={Events}/>
        <Route path="/polls" component={Polls}/>
        <Route path="/info" component={Info}/>
        <Route path="/contact" component={Contact}/>

        <Route exact path="/" component={Dashboard}/>

        <Route component={Footer} />
      </div>
    );
  }
}

export default App;
