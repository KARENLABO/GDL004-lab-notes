import React from 'react';
import firebase from '../config/firebase'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function LogOutModal (){

    return ( 
    )

    async function signOut (){
        try {
            await firebase.logout()
            history.push('/SignIn')
        } catch (error) {
           alert('try Again')
        }
    }
}


export default LogOutModal;