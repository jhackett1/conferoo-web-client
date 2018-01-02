import React, { Component } from 'react';

class Agenda extends Component {
  render() {
    return (
      <div>
        <h5 className="notice">{"There's nothing here."}</h5>
        <p className="notice">Try adding an event to your agenda.</p>
      </div>
    );
  }
}

export default Agenda;
