import React from 'react';

class Spinner extends React.Component{
  render(){
      return(
        <div className={this.props.show === true ? "spinner visible" : "spinner"}>
          <div className="inner"></div>
        </div>
      )
  }
}

export default Spinner;
