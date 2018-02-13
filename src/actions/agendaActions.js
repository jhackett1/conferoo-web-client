import dispatcher from '../dispatcher';
import agendaApi from '../services/agenda';

export function fetchAgenda(){
  agendaApi.getAgenda((err, response)=>{
    if(err) return;
    dispatcher.dispatch({
      type: "FETCH_AGENDA_SUCCESS",
      agenda: response
    })
  })
}

export function addToAgenda(eventId, agenda){
  // Fire initial event
  dispatcher.dispatch({
    type: "ADDING_TO_AGENDA"
  })
  // Construct the new agenda
  agenda.push(eventId);
  let updatedAgenda = agenda;
  dispatcher.dispatch({
    type: 'ADD_TO_AGENDA_SUCCESS',
    agenda: updatedAgenda
  })
  // Make API call
  agendaApi.updateAgenda(updatedAgenda, (err, response)=>{
    if(err) return dispatcher.dispatch({type: 'ADDING_TO_AGENDA_ERROR'});
    dispatcher.dispatch({
      type: 'ADD_TO_AGENDA_SUCCESS',
      agenda: updatedAgenda
    })
  })
}

export function removeFromAgenda(eventId, agenda){

  console.log("remove this id from agenda:", eventId)
  console.log("agenda currently is: ", agenda)

  console.log("remove from agenda ACTION FIRING")
  // Fire initial event
  dispatcher.dispatch({
    type: "REMOVING_FROM_AGENDA"
  })
  // Pull out the specified ID
  let index = agenda.indexOf(eventId);
  if (index >= 0) {
    agenda.splice( index, 1 );
  }
  let updatedAgenda = agenda;

  console.log("agenda is now: ", updatedAgenda)
  dispatcher.dispatch({
    type: 'REMOVING_FROM_AGENDA_SUCCESS',
    agenda: updatedAgenda
  })
  // Make API call
  agendaApi.updateAgenda(updatedAgenda, (err, response)=>{
    if(err) return dispatcher.dispatch({type: 'REMOVING_FROM_AGENDA_ERROR'});

    console.log("have updated agenda on server to:", response)

    dispatcher.dispatch({
      type: 'REMOVING_FROM_AGENDA_SUCCESS',
      agenda: updatedAgenda
    })
  })
}
