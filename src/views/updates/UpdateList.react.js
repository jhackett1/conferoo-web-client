import React, { Component } from 'react';
import updatesApi from '../../services/updates';
import Spinner from  '../../partials/Spinner.react';
import '../../styles/updates.css';
import { Link } from 'react-router-dom';


class UpdateList extends Component {
  constructor(props){
    super(props);
    this.state = {
      updates: []
    };
  }

  componentWillMount(){
    updatesApi.getUpdates((err, updates)=>{
      if(err) return;
      this.setState({updates: updates})
      console.log(this.state.updates)
    })
  }

  render() {

    const UpdatesList = this.state.updates.map((update)=>{
      let image;
      if(update.medium){
        image = `url(${update.medium})`;
      } else {
        image = `url(${update.image})`;
      }
      return(
        <li className='update-item' key={update._id}>
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
