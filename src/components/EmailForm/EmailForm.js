import React, {Component} from 'react';
import axios from 'axios';

class EmailForm extends Component{

    state = {
        emailAddress: '',
        message: '',
    }

    sendEmail = (event) => {
        event.preventDefault();
        console.log('blah blah blah yadda yadda yadda');
        console.log('this.state:', this.state);
        axios.post('/api/sendMail', { emailAddress: this.state.emailAddress, message: this.state.message })
            .then((response) => {
                if (response.data.msg === 'success') {
                    alert('message sent');
                }
                else {
                    alert('message failed to send');
                }
            }).catch((error) => {
                console.log('error in POST email to send:', error);
            })
    }

    handleChange = (propertyToChange, event) => {
        this.setState({
            ...this.state,
            [propertyToChange]: event.target.value
        })
    }

    render(){
        return(
            <div>
                <h3>Send an email!</h3>
                <form onSubmit={this.sendEmail}>
                    <input onChange={(e) => this.handleChange('emailAddress', e)} placeholder="email address" />
                    <input onChange={(e) => this.handleChange('message', e)} placeholder="message" />
                    <button type="submit">Send Email</button>
                </form>
            </div>            
        )
    }
}

export default EmailForm;