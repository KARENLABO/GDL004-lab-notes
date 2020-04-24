import React from 'react';
import firebase from '../config/firebase'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Avatar ({handleShow}){
    return (
        <Container className='userInformation' onClick={handleShow}>
            <Row>
            <Col>
            <div>
                <img  className='avatarpicture' alt='avatar'  src={firebase.ProfilePicture()}></img>
            </div>
            <div>
                <p>{firebase.currentUser()}</p>
            </div>
            </Col>
            
            </Row>
            
        </Container>
    )
}

export default Avatar