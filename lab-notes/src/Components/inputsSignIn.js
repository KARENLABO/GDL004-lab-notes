import React, {useState} from 'react';
import firebase from '../config/firebase'
import {useHistory} from 'react-router-dom'
import './componentsCSS/InputsAuths.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function InputSignIn () {
    const [email, setName] =useState ('')
    const [password, setPassword] =useState ('')
    const history = useHistory()
    return (
    <Container>
        <Col className='containerSignIn'>
            <form>   
            <Row  >
                <Col lg={12}>
                <label>
                    Email:
                </label>  
                </Col>
                <Col>
                    <input
                        name='inputNameSignIn'
                        className='inputsSignIn'
                        value ={email}
                        type='email'
                        onChange ={(e)=>{
                            setName(e.target.value)
                        }}
                    >
                    </input>
                </Col>
            </Row>
            <Row>
                <Col>
                <label>
                    Password:
                </label>  
                </Col>
                <Col>
                    <input
                        name='inputPasswordSignIn'
                        value ={password}
                        type='password'
                        className='inputsSignIn'
                        onChange ={(e)=>{
                            setPassword(e.target.value)
                        }}
                    >
                    </input>
                </Col>
                
            </Row>
            <Row className='rowButtonSignIn'>
                <button  className='ButtonSignIn' type = 'submit' onClick={login}>Sign In</button>
            </Row>
            </form>
            </Col>    
    </Container>
    
    )
//firebase.auth().onAuthStateChanged
    
    async function login (event){
        event.preventDefault()
        try {
            await firebase.login(email,password)
            history.push('/Dashboard')
        } catch (error) {
            alert ('please verify your information and try again!')
        }
    }
}

export default InputSignIn;