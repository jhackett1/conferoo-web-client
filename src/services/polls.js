import Axios from 'axios';
import config from '../config';
import userService from './userService';

const host = config.api_host;

const pollsApi = {

  // Retrieve all posts from the server
  getPolls: function(cb){
    Axios({
      method: 'get',
      url: host + 'polls/',
      headers: {
        Authorization: userService.getToken()
      }
    })
      .then(function(response){
        // Filter the response to hide posts that are not flagged as public
        var processedData = response.data.filter(function(poll){
          return poll.published !== 'private';
        })
        cb(null, processedData)
      })
      .catch(function(err){
        cb(err, null)
      })
  },


  respond: function(id, response, cb){
    Axios({
      method: 'post',
      url: host + 'polls/' + id + '/respond',
      headers: {
        Authorization: userService.getToken()
      },
      data: response
    })
      .then(function(response){
        cb(null, response.data)

      })
      .catch(function(err){
        cb(err, null)
      })
  }

}

export default pollsApi;
