import React, { Component } from 'react';
import Spinner from  '../../partials/Spinner.react';
import '../../styles/updates.css';
import Humandate from 'human-date';

// Flux
import * as updatesActions from '../../actions/updatesActions';
import updatesStore from '../../stores/updatesStore';

class UpdateSingle extends Component {
  constructor(props){
    super(props);
    this.state = {
      update: updatesStore.getById(this.props.match.params.id)
    };
    // Handle changes in store
    this.onChange = () => {
      this.setState({
        update: updatesStore.getById(this.props.match.params.id)
      });
    }
  }

  componentWillMount(){
    // Trigger data fetch
    updatesActions.fetchUpdates();
    // Subscribe state to store changes
    updatesStore.on('change', this.onChange);
  }

  componentWillUnmount(){
    // Unsubscribe from store on component unmount
    updatesStore.removeListener('change', this.onChange)
  }

  render() {
    if (this.state.update !== undefined) {
      const Themes = this.state.update.themes.map((theme)=>
        <li key={theme}>{theme}</li>
      );

      return (
        <main className="update-single">
          {this.state.update.title === undefined ? <Spinner show={true}/> : null}
          <div className="container">
            <h2>{this.state.update.title}</h2>
            <h5 className={this.state.update.createdAt ? "" : "hidden"}>
              <span className="date">{Humandate.relativeTime(this.state.update.createdAt)}</span> - <ul className="themes-list">{Themes}</ul>
            </h5>
            <img alt={this.state.update.teaser} src={this.state.update.image}/>
            <article dangerouslySetInnerHTML={{__html: this.state.update.content}}></article>
          </div>
        </main>
      );
    } else {
      return null;
    }
  }
}

export default UpdateSingle;
