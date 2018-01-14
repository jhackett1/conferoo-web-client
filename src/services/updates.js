import Axios from 'axios';
import config from '../config';
import userService from './userService';

const host = config.api_host;

const updatesApi = {

  // Retrieve all updates from the server
  getUpdates: function(cb){
    Axios({
      method: 'get',
      url: host + 'posts/',
      headers: {
        Authorization: userService.getToken()
      }
    })
      .then(function(response){
        var processedData = response.data.filter(function(update){
          return update.published === 'public';
        })
        cb(null, processedData)
      })
      .catch(function(err){
        userService.expiredToken(err);
        cb(err, null)
      })
  },
  // Retrieve one update from the server
  getUpdate: function(id, cb){
    Axios({
      method: 'get',
      url: host + 'posts/' + id,
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

export default updatesApi;
