import React from 'react';
import '../../styles/login.css';
import userService from '../../services/userService';
import userApi from '../../services/users';

class Onboarding extends React.Component{
  constructor(){
    super();
    this.state = {
      programme: 'Thursday'
    }
  }

  handleChange = (e) => {
    this.setState({
      programme: e.target.value
     });
  };

  handleSubmit = (e) => {
    // Stop page refresh
    e.preventDefault();
    //Now make a PATCH request to the specific user endpoint
    let user = userService.getProfile();
    // Take the user's programme preference
    let updatedUser = {
      onboarded: true,
      programme: this.state.programme
    }
    // Update the server
    userApi.updateUser(user._id, updatedUser, (err, response)=>{
      if(err) console.log(err);
      // Update the local record of the user's profile
      userService.saveProfile(response);
      // If successful, redirect the user to home
      this.props.history.push('/')
    })
  }

  render(){
    return(
      <main className="onboarding">
        <div className="branding">
          <img className="app-logo" alt="logo" src="/logo.svg"/>
          <h1>Fast Stream <br/>Conference <span>2018</span></h1>
        </div>
        <h2>Which day of the conference are you attending?</h2>
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.programme} name="programme" onChange={this.handleChange}>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
          <label htmlFor="programme">We need this in order to show the events you can attend.</label>
          <button className="btn filled" type="submit">Get started</button>
        </form>
      </main>
    )
  }
}

export default Onboarding;
