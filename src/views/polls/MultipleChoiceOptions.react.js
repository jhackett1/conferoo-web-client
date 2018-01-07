import React from 'react';
import userService from '../../services/userService';
import MultipleChoiceResults from './MultipleChoiceResults.react';

import * as pollActions from '../../actions/pollActions';

class Option extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    pollActions.respondToPoll(this.props.id, {
      "response": {
        'email': userService.getProfile().email,
        'option': this.props.opt
      }
    })
  }

  render(){
    return(
      <a className="button grey" onClick={this.handleSubmit}>{this.props.val}</a>
    )
  }
}

class MultipleChoiceOptions extends React.Component{
  render(){


    let userHasResponded;

    for (var key in this.props.poll.responses) {
      if (!this.props.poll.responses.hasOwnProperty(key)) {
        continue;
      }
      if (this.props.poll.responses[key].includes(userService.getProfile().email)) {
        userHasResponded = true;
      }
    }


    if (userHasResponded === true) {
      return (
        <MultipleChoiceResults options={this.props.poll.options} results={this.props.poll.responses}/>
      )
    } else {
      return(
        <ul className="options">
          {(this.props.poll.options.a) ? <Option id={this.props.poll._id} opt="a" val={this.props.poll.options.a}/> : null}
          {(this.props.poll.options.b) ? <Option id={this.props.poll._id} opt="b" val={this.props.poll.options.b}/> : null}
          {(this.props.poll.options.c) ? <Option id={this.props.poll._id} opt="c" val={this.props.poll.options.c}/> : null}
          {(this.props.poll.options.d) ? <Option id={this.props.poll._id} opt="d" val={this.props.poll.options.d}/> : null}
        </ul>
      )
    }



  }
}

export default MultipleChoiceOptions;
