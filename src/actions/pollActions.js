import dispatcher from '../dispatcher';
import pollsApi from '../services/polls';

export function fetchPolls(){
  pollsApi.getPolls((err, response)=>{
    if(err) return;
    dispatcher.dispatch({
      type: "FETCH_POLLS_SUCCESS",
      polls: response
    })
  })
}

export function respondToPoll(id, response){
  console.log(response)

  pollsApi.respond(id, response, (err, response)=>{
    if(err) return;
    dispatcher.dispatch({
      type: "RESPOND_TO_POLL_SUCCESS",
      poll: response
    })
  })
}
