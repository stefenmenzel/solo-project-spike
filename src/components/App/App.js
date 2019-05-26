import React, {Component} from 'react';
import './App.css';
import EmailForm from '../EmailForm/EmailForm';
import TextForm from '../TextForm/TextForm.js';
import Header from '../Header/Header.js';

class App extends Component {

  // state = {
  //   emailAddress: '',
  //   message:'',
  //   areaCode: '',
  //   phoneNumber: '',
  //   textMessage: ''
  // }

  // sendEmail = (event) => {
  //   event.preventDefault();
  //   console.log('blah blah blah yadda yadda yadda');
  //   console.log('this.state:', this.state);
  //   axios.post('/api/sendMail', {emailAddress: this.state.emailAddress, message: this.state.message})
  //   .then((response) => {
  //     if(response.data.msg === 'success'){
  //       alert('message sent');        
  //     }
  //     else{
  //       alert('message failed to send');
  //     }
  //   }).catch((error) => {
  //     console.log('error in POST email to send:', error);
  //   })
  // }

  // sendText = (event) => {
  //   event.preventDefault();
  //   console.log('current phone number:', this.state.areaCode + this.state.phoneNumber);
  //   axios.post('/api/sendText', {number: this.state.areaCode + this.state.phoneNumber, textMessage: this.state.textMessage})
  //   .then((response) => {
  //     console.log('response from send text:', response);
  //   }).catch((error) => {
  //     console.log('error from send text post:', error);
  //   })
  // }

  // handleChange = (propertyToChange, event) => {
  //   this.setState({
  //     ...this.state,
  //     [propertyToChange]: event.target.value
  //   })
  // }

  render(){
    console.log('this.state', this.state);
    return (
      <div className="App">
        <Header />
        <br />
        <EmailForm />
        <br />
        <TextForm />
      </div>
    );
  }  
}

export default App;
