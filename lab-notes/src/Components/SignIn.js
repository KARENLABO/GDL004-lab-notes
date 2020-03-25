import React, { Component } from 'react';
import '../index.css';

class SignIn extends Component {
  
    showAlert = () => {
        alert('Hola');
    }
    render() {
        return (
            <button className='button' onClick={this.showAlert}>SignIn</button>
        )
    }
}

export default SignIn;