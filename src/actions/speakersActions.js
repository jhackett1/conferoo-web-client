import dispatcher from '../dispatcher';
import speakersApi from '../services/speakers';

export function fetchSpeakers(){
  speakersApi.getSpeakers((err, response)=>{
    if(err) return;
    dispatcher.dispatch({
      type: "FETCH_SPEAKERS_SUCCESS",
      speakers: response
    })
  })
}
