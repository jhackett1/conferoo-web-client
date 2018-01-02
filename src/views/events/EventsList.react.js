import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventsList extends Component {
  render() {
    const AllEvents = this.props.events.map((event)=>{
      let image;
      if(event.preview){
        image = `url(${event.preview})`;
      } else if(event.medium){
        image = `url(${event.medium})`;
      } else {
        image = `url(${event.image})`;
      }
      return(
        <li className="event-item" key={event._id}>
          <Link to={`/events/${event._id}`}>
            <div className="image" style={{backgroundImage: image}}/>
            <aside>
              <h5>{event.time}</h5>
              <h3>{event.title}</h3>
              <p>{event.teaser}</p>
            </aside>
          </Link>
        </li>
      )
    });

    return (
          <ul className="events-list">
            {AllEvents}
          </ul>
    );
  }
}

export default EventsList;
