import React, { Component } from 'react';
import EventListItem from './EventListItem.react';

import config from '../../config';

class EventsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      themeFilter: 'all',
      venueFilter: 'all'
    }
  }

  componentWillMount(){
    document.title = "All events | Fast Stream Conference 2018";
  }

  render() {
    const venueOptions = config.venues.map((venue)=>{
      return (
        <option key={venue} value={venue}>{venue}</option>
      )
    })
    const themeOptions = config.themes.map((theme)=>{
      return (
        <option key={theme} value={theme}>{theme}</option>
      )
    })

    const NoResults = () => {
      return (
        <div className="message">
        <h5 className="notice">{"No results"}</h5>
        <p className="notice">Try removing some filters.</p>
        </div>
      )
    }

    // Apply the selected filters to the results
    let filteredEvents = this.props.events
      .filter((event)=>{
        return this.state.themeFilter === 'all' || event.themes.includes(this.state.themeFilter);
      })
      .filter((event)=>{
        return this.state.venueFilter === 'all' || event.venue === this.state.venueFilter;
      })

    const AllEvents = filteredEvents.map((event, i)=>{
      var animStyle = {
        animationDelay: i*0.2 + 's'
      }

      return(
        <EventListItem style={animStyle} key={event._id} data={event} index={i} events={filteredEvents} agenda={this.props.agenda}/>
      )

    });

    return (
      <div>
        <select type="select" onChange={(e)=>{
          this.setState({venueFilter: e.target.value})
        }}>
          <option value='all'>All venues</option>
          {venueOptions}
        </select>
        <select type="select" onChange={(e)=>{
          this.setState({themeFilter: e.target.value})
        }}>
          <option value='all'>All themes</option>
          {themeOptions}
        </select>
        <ul className="events-list">
          {(filteredEvents.length < 1 && (this.state.themeFilter !== 'all' || this.state.venueFilter !== 'all' )) ? <NoResults/> : AllEvents}
        </ul>
      </div>
    );
  }
}

export default EventsList;
