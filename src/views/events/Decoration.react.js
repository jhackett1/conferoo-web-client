import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Decoration extends Component {

  render(){
    let description = this.props.description;
    let time = this.props.time;

    const Label = ()=> {
      return (<span className="time-label">{time}</span>)
    };

    return(
      <div>
        <Label/>
        <li style={this.props.style} className="decoration-item">
          {description}
        </li>
      </div>
    )

  }
}

export default Decoration;
