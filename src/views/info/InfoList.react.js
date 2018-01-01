import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import infoApi from '../../services/info';
import '../../styles/info.css';


class InfoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      pages: [],
      selected: ''
    };
  }

  componentWillMount(){
    console.log('componentwillmounting')
    infoApi.getPages((err, pages)=>{
      if(err) return;
      this.setState({pages: pages})
    })
  }

  render() {
    const Detail = () => {
      console.log(this.props.id)
      if (this.state.selected === this.props.id) {
        return(
          <article>jjjjj</article>
        )
      } else {
        return( null )
      }
    }


    const PagesList = this.state.pages.map((page)=>
      <li key={page._id} onClick={()=>{
        this.setState({selected: page._id})
        console.log(this.state.selected)
      }}>
        <h4>{page.title}</h4>
        <Detail id={page._id} content={page.content}/>
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
        </div>
      </main>
    );
  }
}

export default InfoList;
