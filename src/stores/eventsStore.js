import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import config from '../config';

class EventsStore extends EventEmitter {
  constructor(){
    super();
    this.events = []
  }

  // Provide current store
  getAll(){

    let decoratedEvents = this.events;

    return decoratedEvents;
  }

  // Provide one update by ID
  getById(id){
    return this.events.filter((event)=>{
      return event._id === id;
    })[0];
  }

  // Update store
  fetchEvents(newEvents){
    this.events = newEvents;
    // Get the decorative events from config
    let decoration = config.decoration;
    // For every decorative event...
    for (var i = 0; i < decoration.length; i++) {
      // ...give them all the themes so they appear under any filter
      decoration[i].themes = config.themes;
      // ...mark them as decoration for correct formatting
      decoration[i].type = "decoration";
      // ... and push them into the store
      this.events.push(decoration[i])
    }
    // And sort them by hour
    this.events.sort(function(a, b){
      return new Date('1970/01/01 ' + a.time) - new Date('1970/01/01 ' + b.time);
    })

    this.emit('change');
  }

  handleActions(action){
    switch(action.type){
      case "FETCH_EVENTS_SUCCESS":
        this.fetchEvents(action.events);
        break;
      default:
        break;
    }
  }

}

const eventsStore = new EventsStore();
dispatcher.register(eventsStore.handleActions.bind(eventsStore));

export default eventsStore;
