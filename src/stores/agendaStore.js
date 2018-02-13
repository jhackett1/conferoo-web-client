import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class AgendaStore extends EventEmitter {
  constructor(){
    super();
    this.agenda = []
  }

  // Provide current store
  getAll(){
    // console.log("AGENDA BEING FETCHED FROM STORE: ", this.agenda)
    return this.agenda;
  }

  fetchAgenda(agenda){
    // console.log("UPDATING AGENDA FROM NETWORK: ", agenda)
    console.log("will update store to: ", agenda)
    this.agenda = agenda;
    this.emit('change');
  }

  handleActions(action){
    switch(action.type){
      case "FETCH_AGENDA_SUCCESS":
        this.fetchAgenda(action.agenda)
        break;
      case "ADD_TO_AGENDA_SUCCESS":
        this.fetchAgenda(action.agenda)
        break;
      case "REMOVING_FROM_AGENDA_SUCCESS":
        this.fetchAgenda(action.agenda)
        break;
      default:
        break;
    }
  }

}

const agendaStore = new AgendaStore();
dispatcher.register(agendaStore.handleActions.bind(agendaStore));

export default agendaStore;
