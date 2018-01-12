import React from 'react';

class Banner extends React.Component{

  render(){
    return(
      <section className={this.props.show === true ? "offline banner visible" : "offline banner"}>
        <div className="container">
          <span>The app is in offline mode. New data will be downloaded when you're next online.</span>
        </div>
      </section>
    )
  }

}

export default Banner;
