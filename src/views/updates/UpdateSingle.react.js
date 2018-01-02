import React, { Component } from 'react';
import updatesApi from '../../services/updates';
import Spinner from  '../../partials/Spinner.react';
import '../../styles/updates.css';
import Humandate from 'human-date';

class UpdateSingle extends Component {
  constructor(props){
    super(props);
    this.state = {
      update: {
        themes: []
      }
    };
  }

  componentWillMount(){
    updatesApi.getUpdate(this.props.match.params.id, (err, update)=>{
      if(err) return;
      this.setState({update: update})
      console.log(this.state)
    })
  }

  render() {
    const Themes = this.state.update.themes.map((theme)=>
      <li>{theme}</li>
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
  }
}

export default UpdateSingle;
