import React from 'react';
import Spinner from '../partials/Spinner.react';

// Flux
import * as updatesActions from '../actions/updatesActions';
import updatesStore from '../stores/updatesStore';

class Dashboard extends React.Component{
  constructor(props){
    super(props)
    // TODO: Set initial state from updates, events/agenda and speaker APIs
  }

  componentWillMount(){
    // TODO: Trigger data update
    // TODO: Subscribe to changes in all four stores
  }

  componentWillUnmount(){
    // TODO: Unsubscribe to changes in all four stores
  }

  render(){
    // TODO: Display a different spinner for each section
    return(
      <main className="dashboard">
        <div className="container">
          <h3>My next event</h3>
          <h3>Latest update</h3>
          <h3>Latest poll</h3>
          <h3>Speakers</h3>
        </div>
      </main>
    )
  }
}

export default Dashboard;
