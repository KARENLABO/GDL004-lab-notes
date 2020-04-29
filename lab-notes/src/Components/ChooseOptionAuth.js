import React from 'react';
import './componentsCSS/chooseOption.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

function OptionsAuth (){
    return ( 
        <Container >
            <Row>
            <Col >
                <Link className='OptionsToAuth' to='/SignIn'>
                    <p>Sign In</p>
                </Link>
            </Col>
            <Col >
                <Link className='OptionsToAuth' to='/SignUp'>
                    <p>Sign Up</p>
                </Link>
            </Col>
            </Row>  
 
        </Container>
    )
}


export default OptionsAuth;