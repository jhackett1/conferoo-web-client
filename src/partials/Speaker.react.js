import React from 'react';

import * as speakersActions from '../actions/speakersActions';
import speakersStore from '../stores/speakersStore';

class Speaker extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      speaker: speakersStore.getById(this.props.id)
    }
    // Handle changes in store
    this.onChange = () => {
      this.setState({
        speaker: speakersStore.getById(this.props.id)
      });
    }
  }

  componentWillMount(){
    // Trigger data fetch
    speakersActions.fetchSpeakers();
    // Subscribe state to store changes
    speakersStore.on('change', this.onChange)
  }

  componentWillUnmount(){
    // Unsubscribe from store on component unmount
    speakersStore.removeListener('change', this.onChange)
  }

  render(){
    if (this.state.speaker !== undefined) {
      let speaker = this.state.speaker;

      let image;
      if(speaker.preview){
        image = speaker.preview;
      } else if(speaker.medium){
        image = speaker.medium;
      } else {
        image = speaker.image;
      }

      let shortBio = speaker.biography;
      if (speaker.biography.length > 200) {
        shortBio = speaker.biography.substring(0, 200) + "...";
      }


      return(
        <section className="speaker">
          <img className="portrait" src={image} />
          <h4>{speaker.name}</h4>
          <h5 className="position">{speaker.position}</h5>
          <p>{shortBio}</p>
        </section>
      )
    } else {
      return null;
    }
  }
}

export default Speaker;
