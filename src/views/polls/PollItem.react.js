import React, { Component } from 'react';
import Humandate from 'human-date';
import MultipleChoiceOptions from './MultipleChoiceOptions.react';
import OpenPollItem from './OpenPollItem.react';

class PollItem extends Component {
  render() {
    const poll = this.props.poll;

    const Themes = poll.themes.map((theme)=>
      <li key={theme}>{theme}</li>
    );

    if (poll.type === 'open') {
      return(
        <OpenPollItem style={this.props.style} poll={poll} key={poll._id}/>
      );
    } else {
      return(
        <li style={this.props.style} className='poll-item multiple-choice' key={poll._id}>
            <aside>
              <h3>{poll.question}</h3>
              <p>{poll.detail}</p>
            </aside>
            <MultipleChoiceOptions poll={poll}/>
            <h5 className={poll.createdAt ? "" : "hidden"}>
              {Humandate.relativeTime(poll.createdAt)} - <ul className='themes-list'>{Themes}</ul>
            </h5>
        </li>
      );
    }
  }
}

export default PollItem;
