import Axios from 'axios';
import config from '../config';
import userService from './userService';

const host = config.api_host;

const speakersApi = {

  // Retrieve all pages from the server
  getSpeakers: function(cb){
    Axios({
      method: 'get',
      url: host + 'speakers/',
      headers: {
        Authorization: userService.getToken()
      }
    })
      .then(function(response){
        cb(null, response.data)
      })
      .catch(function(err){
        userService.expiredToken(err);        
        cb(err, null)
      })
  },

}

export default speakersApi;
