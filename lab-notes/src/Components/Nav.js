import React from 'react';
import firebase from '../config/firebase'
import '../Components/componentsCSS/Nav.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function NavController (){
    return ( 
        <Container fluid className='Nav'>
            <Row>
                <Col  md={10}>
                <h1 className='LettersLabNoteNav' >LAB NOTES</h1>
                </Col>
            
            <Col className='userInformation'md={1}>
                   
                    <Row className='hola' >
                        <img  className='avatarpicture' alt='avatar'src='https://image.flaticon.com/icons/svg/456/456141.svg'></img>
                    
                    </Row>
                    <Row lg={12}><p>Karen</p></Row>
               
             
            </Col>
            <Col md={1}>
            <Button className='ButtonSignout'variant="outline-secondary">Sign Out</Button>{' '}
            </Col>
            </Row>
    
        </Container>
    )

    async function facebook (){
        try {
            await firebase.authFacebook()
        } catch (error) {
           console.log(error)
        }
        
    }
 

}


export default NavController;
