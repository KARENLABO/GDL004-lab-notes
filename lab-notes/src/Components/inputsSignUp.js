import React, {useState} from 'react';
import firebase from '../config/firebase'
import {useHistory} from 'react-router-dom'
import './componentsCSS/InputsAuths.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function InputSignUp(){
    const [name, setName] =useState ('')
    const [email, setEmail] =useState ('')
    const [password, setPassword] =useState ('')
    const history = useHistory()
    
    return (
        <Container>
            <Col className='containerSignIn'>
                <form >
                <Row fluid >
                    <Col lg={12}>
                    <label>
                        Name:
                    </label> 
                    </Col>
                        <Col lg={12}>
                        <input
                            name='inputNameSignUp'
                            value ={name}
                            className='inputsSignIn'
                            onChange ={(e)=>{
                                setName(e.target.value)
                            }}
                        >
                        </input>
                    </Col>
                </Row>  
                <Row fluid >
                <Col lg={12}>
                <label>
                    Email:
                </label>   
                </Col>
                <Col lg={12}>
                    <input
                        name='inputEmailSignUp'
                        value ={email}
                        type ='email'
                        className='inputsSignIn'
                        onChange ={(e)=>{
                            setEmail(e.target.value)
                        }}
                    >
                    </input>
                </Col>
                </Row>  
                <Row fluid >
                <Col lg={12}>
                <label>
                    Password:
                </label>
                </Col>
                <Col lg={12}>
                    <input
                        name='inputPasswordSignUp'
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
                <button className='ButtonSignIn' type = 'submit' onClick={onRegister}>Sign Up</button>
                </Row>
            </form>
            </Col>
        </Container>
    
    )
   
    async function onRegister(event) {
        event.preventDefault()
		try {
            await firebase.register(name, email, password)
            history.push('/Dashboard')
		} catch(error) {
			alert(error)
		}
	}
}

export default InputSignUp;