import React, { Component } from 'react';
import EventListItem from './EventListItem.react';

class Agenda extends Component {
  render() {

    let agenda = this.props.events.filter((event)=>{
      return this.props.agenda.includes(event._id);
    })

    const AllEvents = agenda.map((event, i)=>{
      return(
        <EventListItem key={event._id} data={event} index={i} events={agenda} agenda={this.props.agenda}/>
      )
    });

    const NoResults = () => {
      return (
        <div className="message">
        <h5 className="notice">{"There's nothing here"}</h5>
        <p className="notice">Try saving some events to your agenda.</p>
        </div>
      )
    }

    return (
      <ul className="events-list">
          {(agenda.length < 1) ? <NoResults/> : AllEvents}
      </ul>
    );
  }
}

export default Agenda;
