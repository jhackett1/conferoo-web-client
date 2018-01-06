import React from 'react';

class MultipleChoiceOptions extends React.Component{
  render(){
    return(
      <ul className="options">
        {(this.props.poll.options.a) ? <li id={this.props.poll._id} opt="a" val={this.props.poll.options.a}/> : null}
        {(this.props.poll.options.b) ? <li id={this.props.poll._id} opt="b" val={this.props.poll.options.b}/> : null}
        {(this.props.poll.options.c) ? <li id={this.props.poll._id} opt="c" val={this.props.poll.options.c}/> : null}
        {(this.props.poll.options.d) ? <li id={this.props.poll._id} opt="d" val={this.props.poll.options.d}/> : null}
      </ul>
    )
  }
}

export default MultipleChoiceOptions;
