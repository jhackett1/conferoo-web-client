import React from 'react';
import Spinner from '../partials/Spinner.react';
import '../styles/dashboard.css';
import {Link} from 'react-router-dom';
import userService from '../services/userService';
import RoundSpinner from '../partials/RoundSpinner.react';

// Flux
import * as updatesActions from '../actions/updatesActions';
import updatesStore from '../stores/updatesStore';
import * as speakersActions from '../actions/speakersActions';
import speakersStore from '../stores/speakersStore';
import * as pollActions from '../actions/pollActions';
import pollsStore from '../stores/pollsStore';
import * as agendaActions from '../actions/agendaActions';
import agendaStore from '../stores/agendaStore';
import * as eventsActions from '../actions/eventsActions';
import eventsStore from '../stores/eventsStore';

class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      speakers: speakersStore.getRandom(),
      update: updatesStore.getLatest(),
      poll: pollsStore.getLatest(),
      agenda: agendaStore.getAll(),
      events: eventsStore.getAll()
    }
    // Handle changes in store
    this.onChange = () => {
      this.setState({
        speakers: speakersStore.getRandom(),
        update: updatesStore.getLatest(),
        poll: pollsStore.getLatest(),
        agenda: agendaStore.getAll(),
        events: eventsStore.getAll()
      });
    }
  }

  componentWillMount(){
    // Trigger data fetch
    speakersActions.fetchSpeakers();
    pollActions.fetchPolls();
    updatesActions.fetchUpdates();
    agendaActions.fetchAgenda();
    eventsActions.fetchEvents();
    // Subscribe state to store changes
    speakersStore.on('change', this.onChange)
    pollsStore.on('change', this.onChange)
    updatesStore.on('change', this.onChange)
    agendaStore.on('change', this.onChange)
    eventsStore.on('change', this.onChange)

    document.title = "Fast Stream Conference 2018";
  }

  componentWillUnmount(){
    // Unsubscribe from store on component unmount
    speakersStore.removeListener('change', this.onChange)
    pollsStore.removeListener('change', this.onChange)
    updatesStore.removeListener('change', this.onChange)
    agendaStore.removeListener('change', this.onChange)
    eventsStore.removeListener('change', this.onChange)
  }

  render(){

    const NextEvent = () => {
      let now = new Date();
      // let hour = now.getHours();
      let hour = 15
      let minutes = now.getMinutes();

      // console.log(hour)

      let agenda = this.state.events.filter((event)=>{
        return this.state.agenda.includes(event._id);
      })

      let nextEvent = agenda.filter((event)=>{
        let targetHour = hour + 1;
        console.log(event.time.substring(0,2))
        return parseInt(event.time.substring(0,2)) === targetHour;
      })

      console.log(nextEvent)


      return null

    };

    const SpeakerList = this.state.speakers.map((speaker, i)=>{
      let image;
      if(speaker.preview){
        image = `url(${speaker.preview})`;
      } else if(speaker.medium){
        image = `url(${speaker.medium})`;
      } else {
        image = `url(${speaker.image})`;
      }
      let shortBio = speaker.biography;
      if (speaker.biography.length > 200) {
        shortBio = speaker.biography.substring(0, 200) + "...";
      }
      return(
        <li key={speaker._id} className="speaker-item">
        <div className="image" style={{backgroundImage: image}}/>
          <aside>
            <h4>{speaker.name}</h4>
            <p>{speaker.position}</p>
          </aside>
        </li>
      );
    });

    const LatestUpdate = () => {
      if (this.state.update !== undefined) {
        let url = 'update/' + this.state.update._id;
        return (
          <div className="latest-update">
            <h4>{this.state.update.title}</h4>
            <p>{this.state.update.teaser}</p>
            <Link className="button orange" to={url}>Keep reading</Link>
          </div>
        )
      } else {
        return <RoundSpinner show={true}/>;
      }
    }

    const LatestPoll = () => {
      if (this.state.poll !== undefined) {
        return (
          <div className="latest-poll">
            <h4>{this.state.poll.question}</h4>
            <p>{this.state.poll.detail}</p>
            <Link className="button" to='/polls'>Go to polls</Link>
          </div>
        )
      } else {
        return <RoundSpinner show={true}/>;
      }
    }

    return(
      <main className="dashboard">
        <div className="container">
          <h1>Welcome</h1>

          <h3>My next event</h3>
          <NextEvent/>

          <section className="side-by-side">
            <aside>
              <h3>Latest update</h3>
              <LatestUpdate/>
            </aside>
            <aside>
              <h3>Latest poll</h3>
              <LatestPoll/>
            </aside>
          </section>

          <h3>Speakers</h3>
          <ul className="speaker-list">
            {SpeakerList}
          </ul>

        </div>
      </main>
    )
  }
}

export default Dashboard;
