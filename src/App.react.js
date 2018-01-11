import React, { Component } from 'react';
import Banner from './partials/Banner.react';
import Header from './partials/Header.react';
import Footer from './partials/Footer.react';
import { Route } from 'react-router-dom';
import './styles/app.css';

import UpdateList from './views/updates/UpdateList.react';
import UpdateSingle from './views/updates/UpdateSingle.react';
import Events from './views/events/Events.react';
import Polls from './views/polls/Polls.react';
import Info from './views/info/Info.react';
import Contact from './views/Contact.react';
import Policies from './views/Policies.react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true
    }
    this.appLoaded = this.appLoaded.bind(this);
    this.appLoading = this.appLoading.bind(this);
  }

  appLoading(){
    this.setState({isLoading: true})
  }

  appLoaded(){
    this.setState({isLoading: false})
  }

  render() {
    return (
      <div className="App">
        <Banner/>
        <Header loading={this.state.isLoading}/>

        <Route exact path="/update/:id" component={UpdateSingle}/>

        <Route exact path="/" render={(routeProps) => (
          <UpdateList appLoading={this.appLoading} appLoaded={this.appLoaded}/>
        )}/>
        <Route exact path="/events" render={(routeProps) => (
          <Events appLoading={this.appLoading} appLoaded={this.appLoaded}/>
        )}/>
        <Route exact path="/polls" render={(routeProps) => (
          <Polls appLoading={this.appLoading} appLoaded={this.appLoaded}/>
        )}/>
        <Route exact path="/info" render={(routeProps) => (
          <Info appLoading={this.appLoading} appLoaded={this.appLoaded}/>
        )}/>

        <Route path="/contact" component={Contact}/>
        <Route path="/policies" component={Policies}/>

        <Route component={Footer} />
      </div>
    );
  }
}

export default App;
