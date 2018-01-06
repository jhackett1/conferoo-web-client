import dispatcher from '../dispatcher';
import updatesApi from '../services/updates';

import toastr from 'toastr';
import 'toastr/build/toastr.css';


export function fetchUpdates(){
  updatesApi.getUpdates((err, response)=>{
    if(err) return;
    dispatcher.dispatch({
      type: "FETCH_UPDATES_SUCCESS",
      updates: response
    })
  })
}
