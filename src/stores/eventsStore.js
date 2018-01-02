import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class EventsStore extends EventEmitter {
  constructor(){
    super();
    this.events = []
  }

  // Provide current store
  getAll(){
    return this.events;
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
