import React, { Component } from 'react';
import Axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.css';
import '../styles/contact.css';
import config from '../config';

// Where to send message?
let webhookUrl = config.slack_webhook_url;

class Contact extends Component {
  constructor(props){
    super(props);
    // Initial state
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }  

  componentWillMount(){
    document.title = "Contact | Fast Stream Conference 2018";
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
     });
  };

  handleSubmit = (e) => {
    // Stop page reload
    e.preventDefault();

    if (this.state.name.length < 1) {
      return toastr.error("Please try again", "All fields are required")
    }
    if (this.state.email.length < 1) {
      return toastr.error("Please try again", "All fields are required")
    }
    if (this.state.message.length < 1) {
      return toastr.error("Please try again", "All fields are required")
    }

    // Construct message
    let message = {
      text: `New support request from *${this.state.name}* using *Conferoo Web*`,
      attachments: [
        {
          fallback: this.state.message,
          text: this.state.message,
          author_name: this.state.email,
          title_link: this.state.email
        }
      ]
    };
    // Send message
    Axios({
      method: 'post',
      url: webhookUrl,
      data: JSON.stringify(message)
    })
      .then((response)=>{
        this.setState({
          name: '',
          email: '',
          message: ''
        })
        toastr.success("We'll respond as soon as we can", "Your message has been sent")
      })
      .catch((err)=>{
        toastr.error("Try emailing <strong>info@fsconference.co.uk</strong>", "We couldn't send your message")
      })
  }

  render() {
    return (
      <main className="contact">
        <div className="container">
          <h2>Contact</h2>
          <p>If you have a question about the conference, or are having trouble using this application, let us know.</p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Your name</label>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>

            <label htmlFor="email">Your email</label>
            <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>

            <label htmlFor="message">Your message</label>
            <textarea name="message" rows="5" onChange={this.handleChange} value={this.state.message}></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </main>
    );
  }
}

export default Contact;
