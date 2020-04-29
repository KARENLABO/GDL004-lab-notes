import React from 'react';
import firebase from '../config/firebase'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './componentsCSS/Button.module.css'


function Avatar (){
    return (
        <Container >
            <Row>
            <Col>
            <div>
                <img  className={styles.avatar}  alt='avatar'  src={firebase.ProfilePicture()}></img>
            </div>
            <div>
                <p className={styles.name} >{firebase.currentUser()}</p>
            </div>
            </Col>
            
            </Row>
            
        </Container>
    )
}

export default Avatar