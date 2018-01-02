import Axios from 'axios';
import config from '../config';
import userService from './userService';

const host = config.api_host;

const eventsApi = {

  // Retrieve all pages from the server
  getEvents: function(cb){
    Axios({
      method: 'get',
      url: host + 'events/',
      headers: {
        Authorization: userService.getToken()
      }
    })
      .then(function(response){
        var processedData = response.data.filter(function(event){
          return event.published === 'public';
        })
        cb(null, processedData)
      })
      .catch(function(err){
        cb(err, null)
      })
  },

}

export default eventsApi;
