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
                <Col  md={6} lg={10}>
                <h1 className='LettersLabNoteNav' >LAB NOTES</h1>
                </Col>
            
                <ModalSignOut/>
            
            
            </Row>
   
        </Container>
    )


}


export default NavController;
