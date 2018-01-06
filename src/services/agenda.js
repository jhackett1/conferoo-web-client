import Axios from 'axios';
import config from '../config';
import userService from './userService';

const host = config.api_host;

const agendaApi = {

  // Retrieve all pages from the server
  getAgenda: function(cb){
    Axios({
      method: 'get',
      url: host + 'agenda/',
      headers: {
        Authorization: userService.getToken()
      }
    })
      .then(function(response){
        cb(null, response.data)
      })
      .catch(function(err){
        cb(err, null)
      })
  },

  // Update the agenda
  updateAgenda: function(newAgenda, cb){
    Axios({
      method: 'put',
      url: host + 'agenda/',
      headers: {
        Authorization: userService.getToken()
      },
      data: newAgenda
    })
      .then(function(response){
        cb(null, response.data)
      })
      .catch(function(err){
        cb(err, null)
      })
  },

}

export default agendaApi;