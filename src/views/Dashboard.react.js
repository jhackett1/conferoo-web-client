import React from 'react';

class Dashboard extends React.Component{

  render(){
    return(
      <main className="dashboard">
        <div className="container">
          <h3>Next up</h3>
          <h3>Latest update</h3>
          <h3>Latest poll</h3>
          <h3>Speakers</h3>
        </div>
      </main>
    )
  }
}

export default Dashboard;
