import React, { Component } from 'react';
import Spinner from  '../../partials/Spinner.react';
import '../../styles/updates.css';
import { Link } from 'react-router-dom';

// Flux
import * as updatesActions from '../../actions/updatesActions';
import updatesStore from '../../stores/updatesStore';

class UpdateList extends Component {
  constructor(props){
    super(props);
    this.state = {
      updates: updatesStore.getAll()
    };
    // Handle changes in store
    this.onChange = () => {
      this.setState({
        updates: updatesStore.getAll()
      });
    }
  }

  componentWillMount(){
    // Trigger data fetch
    updatesActions.fetchUpdates();
    // Subscribe state to store changes
    updatesStore.on('change', this.onChange);
    document.title = "Updates | Fast Stream Conference 2018";
  }

  componentWillUnmount(){
    // Unsubscribe from store on component unmount
    updatesStore.removeListener('change', this.onChange)
  }

  render() {

    const UpdatesList = this.state.updates.map((update, i)=>{

      var animStyle = {
        animationDelay: i*0.2 + 's'
      }

      let image;
      if(update.medium){
        image = `url(${update.medium})`;
      } else {
        image = `url(${update.image})`;
      }
      return(
        <li style={animStyle} className='update-item' key={update._id}>
          <Link to={`/update/${update._id}`}>
            <div className="image" style={{backgroundImage: image}}/>
            <aside>
              <h3>{update.title}</h3>
              <p>{update.teaser}</p>
            </aside>
          </Link>
        </li>
      );
    });

    return (
      <main className="updates">
        {this.state.updates.length === 0 ? <Spinner show={true}/> : null}
        <div className="container">
          <h2>Updates</h2>
          <ul className="updates-list">
            {UpdatesList}
          </ul>
        </div>
      </main>
    );
  }
}

export default UpdateList;
