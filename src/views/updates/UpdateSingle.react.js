import React, { Component } from 'react';
import Spinner from  '../../partials/Spinner.react';
import '../../styles/updates.css';
import Humandate from 'human-date';
import Speaker from '../../partials/Speaker.react';

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


  componentDidMount() {
    window.scrollTo(0, 0)
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

      let image;
      if(this.state.update.medium){
        image = `url(${this.state.update.medium})`;
      } else {
        image = `url(${this.state.update.image})`;
      }
      // Update page title
      document.title = `${this.state.update.title} | Updates | Fast Stream Conference 2018`;

      return (

        <main className="update-single">
          {this.state.update.title === undefined ? <Spinner show={true}/> : null}
          <div className="container">
            <h2>{this.state.update.title}</h2>
            <h5 className={this.state.update.createdAt ? "" : "hidden"}>
              {Humandate.relativeTime(this.state.update.createdAt)}
            </h5>
            <div className="image" style={{backgroundImage: image}}/>
            <article dangerouslySetInnerHTML={{__html: this.state.update.content}}></article>
            <Speaker id={this.state.update.author}/>
            <hr/>
            <ul className="themes-list">In {Themes}</ul>
          </div>
        </main>
      );
    } else {
      return null;
    }
  }
}

export default UpdateSingle;
