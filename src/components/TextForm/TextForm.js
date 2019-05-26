import React, {Component} from 'react';
import axios from 'axios';

class TextForm extends Component{

    state = {
        areaCode: '',
        phoneNumber: '',
        textMessage: ''
    }

    sendText = (event) => {
        event.preventDefault();
        console.log('current phone number:', this.state.areaCode + this.state.phoneNumber);
        axios.post('/api/sendText', { number: this.state.areaCode + this.state.phoneNumber, textMessage: this.state.textMessage })
            .then((response) => {
                console.log('response from send text:', response);
                this.setState({
                    areaCode: '',
                    phoneNumber: '',
                    textMessage: ''
                })
            }).catch((error) => {
                console.log('error from send text post:', error);
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
                <h3>Send a text!</h3>
                <form onSubmit={this.sendText}>
                    <input onChange={(e) => this.handleChange('areaCode', e)} value={this.state.areaCode} placeholder='area code' />
                    <input onChange={(e) => this.handleChange('phoneNumber', e)} value={this.state.phoneNumber} placeholder='phone number' />
                    <input onChange={(e) => this.handleChange('textMessage', e)} value={this.state.textMessage} placeholder='text to send' />
                    <button typ="submit">Send Text</button>
                </form>
            </div>            
        )
    }
}

export default TextForm;