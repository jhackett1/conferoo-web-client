import React from 'react';
import { Offline } from 'react-detect-offline';

class Banner extends React.Component{

  render(){
    return(
      <Offline>
        <section className="offline banner visible">
          <div className="container">
            <span>The app is in offline mode. New data will be downloaded when you're next online.</span>
          </div>
        </section>
      </Offline>
    )
  }

}

export default Banner;
