import React, { Component } from 'react';
import Spinner from  '../../partials/Spinner.react';

// Flux
import * as eventsActions from '../../actions/eventsActions';
import eventsStore from '../../stores/eventsStore';

class EventSingle extends Component {
  constructor(props){
    super(props);
    this.state = {
      event: eventsStore.getById(this.props.match.params.id)
    };
    // Handle changes in store
    this.onChange = () => {
      this.setState({
        event: eventsStore.getById(this.props.match.params.id)
      });
    }
  }

  componentWillMount(){
    // Trigger data fetch
    eventsActions.fetchEvents();
    // Subscribe state to store changes
    eventsStore.on('change', this.onChange);
  }

  componentWillUnmount(){
    // Unsubscribe from store on component unmount
    eventsStore.removeListener('change', this.onChange)
  }

  render() {
    if (this.state.event !== undefined) {
      const Themes = this.state.event.themes.map((theme)=>
        <li key={theme}>{theme}</li>
      );

      return (
        <section className="event-single">
          {this.state.event.title === undefined ? <Spinner show={true}/> : null}
          <div className="container">
            <h3>{this.state.event.title}</h3>
            <h5 className={this.state.event.createdAt ? "" : "hidden"}>
              <ul className="themes-list">{Themes}</ul>
            </h5>
            <img alt={this.state.event.teaser} src={this.state.event.image}/>
            <article dangerouslySetInnerHTML={{__html: this.state.event.content}}></article>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default EventSingle;
