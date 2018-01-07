import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class SpeakersStore extends EventEmitter {
  constructor(){
    super();
    this.speakers = []
  }

  // Provide current store
  getAll(){
    return this.speakers;
  }

  // Provide one update by ID
  getById(id){
    return this.speakers.filter((speaker)=>{
      return speaker._id === id;
    })[0];
  }

  // Return an array of three random, non-repeating speakers
  getRandom(){
    let tempSpeakers = [];
    for (var i = 0; i < this.speakers.length; i++) {
      tempSpeakers.push(this.speakers[i])
    }
    let randomSpeakers = [];
    if (tempSpeakers.length >= 3) {
      while (tempSpeakers.length !== 0) {
          var index = Math.floor(Math.random()*tempSpeakers.length);
          // console.log(index)
          var pickedSpeaker = tempSpeakers[index];
          // console.log(pickedSpeaker)
          randomSpeakers.push(pickedSpeaker);
          // console.log(randomSpeakers)
          tempSpeakers.splice(index, 1);
      }
    }
    return randomSpeakers;
  }

  // Update store
  fetchSpeakers(newSpeakers){
    this.speakers = newSpeakers;
    this.emit('change');
  }

  handleActions(action){
    switch(action.type){
      case "FETCH_SPEAKERS_SUCCESS":
        this.fetchSpeakers(action.speakers);
        break;
      default:
        break;
    }
  }

}

const speakersStore = new SpeakersStore();
dispatcher.register(speakersStore.handleActions.bind(speakersStore));

export default speakersStore;
