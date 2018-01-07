import React, { Component } from 'react';
import '../../styles/events.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import EventsList from './EventsList.react';
import EventSingle from './EventSingle.react';
import Agenda from './Agenda.react';
import Spinner from  '../../partials/Spinner.react';

// Flux
import * as eventsActions from '../../actions/eventsActions';
import eventsStore from '../../stores/eventsStore';
import * as agendaActions from '../../actions/agendaActions';
import agendaStore from '../../stores/agendaStore';

class Events extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: eventsStore.getAll(),
      agenda: agendaStore.getAll()
    };
    // Handle changes in store
    this.onChange = () => {
      this.setState({
        events: eventsStore.getAll(),
        agenda: agendaStore.getAll()
      });
    }
  }

  componentWillMount(){
    // Trigger data fetch
    eventsActions.fetchEvents();
    agendaActions.fetchAgenda();
    // Subscribe state to store changes
    eventsStore.on('change', this.onChange);
    agendaStore.on('change', this.onChange);
  }

  componentWillUnmount(){
    // Unsubscribe from store on component unmount
    eventsStore.removeListener('change', this.onChange)
    agendaStore.removeListener('change', this.onChange)
  }

  render() {
    return (
      <main className="events">
        {this.state.events.length === 0 ? <Spinner show={true}/> : null}
        <div className="container">
          <h2>Events</h2>
          <ul className="events-navigation">
            <li><NavLink exact to="/events">All events</NavLink></li>
            <li><NavLink exact to="/events/agenda">My agenda</NavLink></li>
          </ul>
          <Switch>
            <Route exact path="/events/agenda" render={(routeProps) => (
              <Agenda agenda={this.state.agenda} events={this.state.events} />
            )}/>
            <Route exact path="/events/:id" component={EventSingle}/>
            <Route exact path="/events" render={(routeProps) => (
              <EventsList agenda={this.state.agenda} events={this.state.events} />
            )}/>
          </Switch>

        </div>
      </main>
    );
  }
}

export default Events;
