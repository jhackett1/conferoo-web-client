import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class UpdatesStore extends EventEmitter {
  constructor(){
    super();
    this.updates = []
  }

  // Provide whole current store
  getAll(){
    return this.updates;
  }

  // Provide one update by ID
  getById(id){
    return this.updates.filter((update)=>{
      return update._id === id;
    })[0];
  }

  getLatest(){
    return this.updates[0];
  }

  // Update store
  fetchUpdates(newUpdates){
    this.updates = newUpdates;
    this.emit('change');
  }

  handleActions(action){
    switch(action.type){
      case "FETCH_UPDATES_SUCCESS":
        this.fetchUpdates(action.updates);
        break;
      default:
        break;
    }
  }

}

const updatesStore = new UpdatesStore();
dispatcher.register(updatesStore.handleActions.bind(updatesStore));

export default updatesStore;
