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

  updatePoll(updatedPoll){
    console.log('Store updating polls from server')

    for(var i in this.polls){
      if (this.polls[i]._id === updatedPoll._id) {
        this.polls[i] = updatedPoll;
        this.emit('change');
      }
    }
  }

  handleActions(action){
    switch(action.type){
      case "FETCH_POLLS_SUCCESS":
        this.fetchPolls(action.polls);
        break;
      case "RESPOND_TO_POLL_SUCCESS":
        this.updatePoll(action.poll);
        break;
      default:
        break;
    }
  }

}

const pollsStore = new PollsStore();
dispatcher.register(pollsStore.handleActions.bind(pollsStore));

export default pollsStore;
