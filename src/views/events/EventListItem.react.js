import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventListItem extends Component {

  render(){
    let event = this.props.data;
    let i = this.props.index-1;

    let image;
    if(event.medium){
      image = `url(${event.medium})`;
    } else {
      image = `url(${event.image})`;
    }

    const Label = ()=> {

      if (i > 0) {
          if (event.time !== this.props.events[i].time) {
            return (<span className="time-label">{event.time}</span>)
          } else {
            return null
          }
      } else {
        return (<span className="time-label">{event.time}</span>)
      }
    };

    return(
      <div>
        <Label/>
        <li className="event-item" key={event._id}>
          <Link to={`/events/${event._id}`}>
            <div className="image" style={{backgroundImage: image}}/>
            <aside>
              <h3>{event.title}</h3>
              <p>{event.teaser}</p>
            </aside>
            {(this.props.agenda.includes(event._id))? <i class="fa fa-bookmark"></i> : <i class="fa fa-bookmark-o"></i> }
          </Link>
        </li>
      </div>
    )

  }
}

export default EventListItem;
