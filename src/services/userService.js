const userService = {

  // getToken: function(){
  //   return "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuZnNjb25mZXJlbmNlLmNvLnVrIiwic3ViIjoiNTlmYjIwMTczNTQxMTYwMDEyOTcxOWU0IiwiYWRtaW4iOnRydWUsImV4cCI6MTUxNTAwMDE4NjU0OX0.4jsvg87RXytSVuCpapT21brBvo73AfXbO0CJp2PJCzA";
  // },


  checkToken(){
    let jwt = localStorage.getItem("conferoo_user_token");
    // If the token is set, return it, else return false
    if (jwt) {
      return true;
    } else {
      return false;
    }
  },
  // Save a token in localStorage
  saveToken(jwt){
    localStorage.setItem('conferoo_user_token', jwt);
  },
  saveProfile(profile){
    var profileString = JSON.stringify(profile);
    localStorage.setItem('profile', profileString);
  },
  // Retrieve a token from localStorage
  getToken(){
    if (localStorage.getItem("conferoo_user_token")) {
      var rawToken = localStorage.getItem("conferoo_user_token").toString();
      return "bearer " + rawToken;
    } else {
      return null;
    }
  },
  getProfile(){
    var profileString = localStorage.getItem('profile');
    return JSON.parse(profileString);
  },
  // Destroy a token (eg. when logging out)
  removeToken(){
    localStorage.removeItem('conferoo_user_token');
  },
  // Handle a potentially expired token
  expiredToken(err){
    if (err.response.status === 401) {
      // Handle expired tokens
      console.log("Token expired, redirecting to /login");
      document.location = '/login';
    }
  }


}

export default userService;
