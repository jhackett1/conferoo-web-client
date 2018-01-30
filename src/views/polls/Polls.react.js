import React, { Component } from 'react';
import '../../styles/polls.css';
import PollItem from './PollItem.react';

// Flux
import * as pollActions from '../../actions/pollActions';
import pollsStore from '../../stores/pollsStore';

class Polls extends Component {
  constructor(props){
    super(props);
    this.state = {
      polls: pollsStore.getAll()
    };
    // Handle changes in store
    this.onChange = () => {
      this.setState({
        polls: pollsStore.getAll()
      });
      // Hide spinner
      this.props.appLoaded();
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentWillMount(){
    // Show spinner
    this.props.appLoading();
    // Trigger data fetch
    pollActions.fetchPolls();
    // Subscribe state to store changes
    pollsStore.on('change', this.onChange);
    document.title = "Polls | Fast Stream Conference 2018";
  }

  componentWillUnmount(){
    // Unsubscribe from store on component unmount
    pollsStore.removeListener('change', this.onChange)
  }

  render() {
    const PollsList = this.state.polls.map((poll, i)=>{
      var animStyle = {
        animationDelay: i*0.2 + 's'
      }
      return(
        <PollItem style={animStyle} poll={poll} key={poll._id}/>
      );
    });

    const NoResults = () => {
      return (
        <div className="message">
        <h5 className="notice">{"There's nothing here"}</h5>
        <p className="notice">No polls are open at the moment.</p>
        </div>
      )
    }

    return (
      <main className="polls">
        <div className="container">
          <h2>Polls</h2>
          <p>Pose questions to speakers and provide feedback.</p>
          <ul className="polls-list">
            {(this.state.polls.length < 1) ? <NoResults/> : PollsList}
          </ul>
        </div>
      </main>
    );
  }
}

export default Polls;
