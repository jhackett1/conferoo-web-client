import React, { Component } from 'react';
import '../../styles/info.css';
import Profile from './Profile.react';

// Flux
import * as infoActions from '../../actions/infoActions';
import infoStore from '../../stores/infoStore';

class Info extends Component {
  constructor(props){
    super(props);
    this.state = {
      pages: infoStore.getAll(),
      selected: ''
    };
    // Handle changes in store
    this.onChange = () => {
      this.setState({
        pages: infoStore.getAll()
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
    infoActions.fetchInfo();
    // Subscribe state to store changes
    infoStore.on('change', this.onChange);
    document.title = "Info | Fast Stream Conference 2018";
  }

  componentWillUnmount(){
    // Unsubscribe from store on component unmount
    infoStore.removeListener('change', this.onChange)
  }

  render() {
    const PagesList = this.state.pages.map((page)=>
      <li className={this.state.selected === page._id ? 'page-item active' : 'page-item'} key={page._id} onClick={()=>{
        this.setState({selected: page._id})
      }}>
        <h4>{page.title}</h4>
        {this.state.selected === page._id ? <article dangerouslySetInnerHTML={{__html: page.content}}></article> : null}

      </li>
    );

    return (
      <main className="info">
        <div className="container">
          <h2>Info</h2>
          <p>Everything you need to know about the conference.</p>
          <ul className="pages-list">
            {PagesList}
          </ul>
          <h2>My profile</h2>
          <Profile/>
        </div>
      </main>
    );
  }
}

export default Info;
