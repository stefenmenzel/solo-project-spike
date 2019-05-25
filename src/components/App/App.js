import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import nodeMailer from 'nodemailer';

class App extends Component {

  sendEmail = (event) => {
    event.preventDefault();
    console.log('blah blah blah yadda yadda yadda');
  }

  render(){
    return (
      <div className="App">
        <form onSubmit={this.sendEmail}>
          <input placeholder="email address" />
          <input placeholder="message" />
          <button type="submit">Send Email</button>
        </form>
      </div>
    );
  }  
}

export default App;
