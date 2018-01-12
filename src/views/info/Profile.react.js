import React from 'react';
import userService from '../../services/userService';

class Profile extends React.Component{
  render(){
    let profile = userService.getProfile();
    return(
      <section className="user-profile">
        <img alt={profile.displayName} src={profile.image}/>
        <h4>{profile.displayName}</h4>
        <p>{profile.email}</p>
        <p>Attending on {profile.programme}</p>
      </section>
    );
  }
}

export default Profile;
