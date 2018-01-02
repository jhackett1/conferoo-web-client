import dispatcher from '../dispatcher';
import eventsApi from '../services/events';

export function fetchEvents(){
  eventsApi.getEvents((err, response)=>{
    if(err) return;
    dispatcher.dispatch({
      type: "FETCH_EVENTS_SUCCESS",
      events: response
    })
  })
}
