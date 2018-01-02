import React from 'react';

class Spinner extends React.Component{
  render(){
    if(this.props.show === true){
      return(
        <div className="spinner">
          <div className="inner"></div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Spinner;
