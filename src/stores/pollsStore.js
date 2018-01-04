import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class PollsStore extends EventEmitter {
  constructor(){
    super();
    this.polls = []
  }

  // Provide current store
  getAll(){
    return this.polls;
  }

  // Update store
  fetchPolls(newPolls){
    this.polls = newPolls;
    this.emit('change');
  }

  handleActions(action){
    switch(action.type){
      case "FETCH_POLLS_SUCCESS":
        this.fetchPolls(action.polls);
        break;
      default:
        break;
    }
  }

}

const pollsStore = new PollsStore();
dispatcher.register(pollsStore.handleActions.bind(pollsStore));

export default pollsStore;
