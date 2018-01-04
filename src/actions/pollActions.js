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
