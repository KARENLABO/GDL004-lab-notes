import React from 'react';
import firebase from '../config/firebase'
import {useHistory} from 'react-router-dom'
import '../Components/componentsCSS/Nav.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ModalSignOut from './ModalSignOut'

function NavController (){
    const history = useHistory()
    return ( 
        <Container fluid className='Nav'>
            <Row>
                <Col xs={7}sm={7} md={8} lg={8}>
                <h1 className='LettersLabNoteNav' >LAB NOTES</h1>
                </Col>
                <Col xs={5}sm={5} md={4} lg={4}>
                    <ModalSignOut/>
                </Col>
            
            
            </Row>
   
        </Container>
    )


}


export default NavController;
