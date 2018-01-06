import Axios from 'axios';
import config from '../config';
import userService from './userService';

const host = config.api_host;

const usersApi = {

  // Update the agenda
  updateUser: function(userId, updatedUser, cb){
    Axios({
      method: 'patch',
      url: host + 'users/' + userId,
      headers: {
        Authorization: userService.getToken()
      },
      data: updatedUser
    })
      .then(function(response){
        cb(null, response.data)
      })
      .catch(function(err){
        cb(err, null)
      })
  },

  getMe: function(cb){
    Axios({
      method: 'get',
      url: host + 'users/me',
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
  }

}

export default usersApi;
