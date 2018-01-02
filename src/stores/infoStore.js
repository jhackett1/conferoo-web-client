import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class InfoStore extends EventEmitter {
  constructor(){
    super();
    this.info = []
  }

  // Provide current store
  getAll(){
    return this.info;
  }

  // Update store
  fetchInfo(newInfo){
    this.info = newInfo;
    this.emit('change');
  }

  handleActions(action){
    switch(action.type){
      case "FETCH_INFO_SUCCESS":
        this.fetchInfo(action.info);
        break;
      default:
        break;
    }
  }

}

const infoStore = new InfoStore();
dispatcher.register(infoStore.handleActions.bind(infoStore));

export default infoStore;
