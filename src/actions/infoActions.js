import dispatcher from '../dispatcher';
import infoApi from '../services/info';

export function fetchInfo(){
  infoApi.getPages((err, response)=>{
    if(err) return;
    dispatcher.dispatch({
      type: "FETCH_INFO_SUCCESS",
      info: response
    })
  })
}
