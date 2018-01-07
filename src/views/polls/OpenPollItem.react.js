import React, { Component } from 'react';
import Humandate from 'human-date';
import MultipleChoiceOptions from './MultipleChoiceOptions.react';
import pollsApi from '../../services/polls';
import userService from '../../services/userService';

import * as pollActions from '../../actions/pollActions';

class PollItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      response: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      response: e.target.value
     });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const poll = this.props.poll;

    pollActions.respondToPoll(poll._id, {
      "response": {
        'email': userService.getProfile().email,
        'message': this.state.response
      }
    })

  }

  render() {
    const poll = this.props.poll;
    const email = userService.getProfile().email;

    var results = poll.openResponses.filter(function(response){
      return response.email === email;
    })

    const Themes = poll.themes.map((theme)=>
      <li key={theme}>{theme}</li>
    );

    if (results.length > 0) {
      // Already participated
      return(
        <li style={this.props.style} className='poll-item open'>
            <aside>
              <h3>{poll.question}</h3>
              <p>{poll.detail}</p>
            </aside>
            <p className="already-participated">{"You've answered this poll"}</p>
            <h5 className={poll.createdAt ? "" : "hidden"}>
              {Humandate.relativeTime(poll.createdAt)} - <ul className='themes-list'>{Themes}</ul>
            </h5>
        </li>
      );
    } else {
      // Go ahead
      return(
        <li style={this.props.style} className='poll-item open'>
            <aside>
              <h3>{poll.question}</h3>
              <p>{poll.detail}</p>
            </aside>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.response} onChange={this.handleChange}/>
              <button type="submit">Send</button>
            </form>
            <h5 className={poll.createdAt ? "" : "hidden"}>
              {Humandate.relativeTime(poll.createdAt)} - <ul className='themes-list'>{Themes}</ul>
            </h5>
        </li>
      );
    }
  }
}

export default PollItem;
