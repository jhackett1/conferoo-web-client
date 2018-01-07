import React from 'react';

class RoundSpinner extends React.Component{
  render(){
    if(this.props.show === true){
      return(
        <i className="fa fa-circle-o-notch"></i>
      )
    } else {
      return null;
    }
  }
}

export default RoundSpinner;
