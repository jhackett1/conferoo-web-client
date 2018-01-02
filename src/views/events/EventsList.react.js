import React, { Component } from 'react';
import '../../styles/events.css';
import { Link } from 'react-router-dom';

class EventsList extends Component {
  render() {
    return (
      <main className="events">
        <div className="container">
          <h2>Events</h2>
          <ul className="events-navigation">
            <li><Link to="#">All events</Link></li>
            <li><Link to="#">My agenda</Link></li>
          </ul>
        </div>
      </main>
    );
  }
}

export default EventsList;
