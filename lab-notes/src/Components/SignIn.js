import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props);
    }
    showAlert = () => {
        alert('Hola');
    }
    render() {
        return (
            <button onClick={this.showAlert}>SignIn</button>
        )
    }
}

export default SignIn;