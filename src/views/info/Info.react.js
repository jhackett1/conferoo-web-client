import React, { Component } from 'react';
import infoApi from '../../services/info';
import '../../styles/info.css';
import Spinner from  '../../partials/Spinner.react';

class Info extends Component {
  constructor(props){
    super(props);
    this.state = {
      pages: [],
      selected: ''
    };
  }

  componentWillMount(){
    infoApi.getPages((err, pages)=>{
      if(err) return;
      this.setState({pages: pages})
    })
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
        {this.state.pages.length === 0 ? <Spinner show={true}/> : null}      
        <div className="container">
          <h2>Info</h2>
          <p>Everything you need to know about the conference.</p>

          <ul className="pages-list">
            {PagesList}
          </ul>
        </div>
      </main>
    );
  }
}

export default Info;
