import React, { Component } from 'react';
import Spinner from  '../../partials/Spinner.react';
import Speaker from '../../partials/Speaker.react';

// Flux
import * as eventsActions from '../../actions/eventsActions';
import eventsStore from '../../stores/eventsStore';
import * as agendaActions from '../../actions/agendaActions';
import agendaStore from '../../stores/agendaStore';

class EventSingle extends Component {
  constructor(props){
    super(props);
    this.state = {
      event: eventsStore.getById(this.props.match.params.id),
      agenda: agendaStore.getAll()
    };
    // Handle changes in store
    this.onChange = () => {
      this.setState({
        event: eventsStore.getById(this.props.match.params.id),
        agenda: agendaStore.getAll()
      });
    }
    this.addToAgenda = this.addToAgenda.bind(this);
    this.removeFromAgenda = this.removeFromAgenda.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
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


  addToAgenda(){
    agendaActions.addToAgenda(this.state.event._id, this.state.agenda);
  }

  removeFromAgenda(){
    agendaActions.removeFromAgenda(this.state.event._id, this.state.agenda);
  }

  render() {
    if (this.state.event !== undefined) {

      let image;
      if(this.state.event.medium){
        image = `url(${this.state.event.medium})`;
      } else {
        image = `url(${this.state.event.image})`;
      }

      const Themes = this.state.event.themes.map((theme)=>
        <li key={theme}>{theme}</li>
      );

      const Slides = () => (
        <a href={this.state.event.slides} target="blank" className="button orange"><i className="fa fa-download"></i> Download slides</a>
      );

      return (
        <section className="event-single">
          {this.state.event.title === undefined ? <Spinner show={true}/> : null}
            <h3>{this.state.event.title}</h3>
            <h5> At <span>{this.state.event.time}</span> on <span>{this.state.event.programme}</span> in <span>{this.state.event.venue}</span></h5>
            <div className="image" style={{backgroundImage: image}}/>
            {(this.state.agenda.includes(this.state.event._id))? <a onClick={this.removeFromAgenda} className="button"><i className="fa fa-bookmark"></i> Remove from agenda</a> : <a onClick={this.addToAgenda} className="button"><i className="fa fa-bookmark-o"></i> Add to agenda</a> }
            <article dangerouslySetInnerHTML={{__html: this.state.event.content}}></article>
            <Speaker id={this.state.event.speaker}/>
            {(this.state.event.slides ? <Slides/> : null)}
            <hr/>
            <ul className="themes-list">In {Themes}</ul>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default EventSingle;
