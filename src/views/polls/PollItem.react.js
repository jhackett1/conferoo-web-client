import React, { Component } from 'react';
import Humandate from 'human-date';
import MultipleChoiceOptions from './MultipleChoiceOptions.react';

class PollItem extends Component {

  render() {
    const poll = this.props.poll;

    if (poll.type === 'open') {
      return(
        <li className='poll-item open' key={poll._id}>
            <aside>
              <h3>{poll.question}</h3>
              <p>{poll.detail}</p>
            </aside>
            <form>
              <input type="text" name="response"/>
              <button type="submit">Send</button>
            </form>
            <h5 className={poll.createdAt ? "" : "hidden"}>
              {Humandate.relativeTime(poll.createdAt)}
            </h5>
        </li>
      );
    } else {

      return(
        <li className='poll-item multiple-choice' key={poll._id}>
            <aside>
              <h3>{poll.question}</h3>
              <p>{poll.detail}</p>
            </aside>
            <MultipleChoiceOptions poll={poll}/>
            <h5 className={poll.createdAt ? "" : "hidden"}>
              {Humandate.relativeTime(poll.createdAt)}
            </h5>
        </li>
      );
    }
  }
}

export default PollItem;
