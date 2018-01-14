import Axios from 'axios';
import config from '../config';
import userService from './userService';

const host = config.api_host;

const infoApi = {

  // Retrieve all pages from the server
  getPages: function(cb){
    Axios({
      method: 'get',
      url: host + 'pages/',
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

}

export default infoApi;
