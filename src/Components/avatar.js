import React from 'react';
import firebase from '../config/firebase'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './componentsCSS/Button.module.css'


function Avatar ({handleShow}){
    return (
        <Container >
            <Row>
                <Col className={styles.paddingCero} sm={9} md={9} lg={9} xl={9}>
                    <img  className={styles.avatar}  alt='avatar'  src={firebase.ProfilePicture()}></img>
                              
                    <p className={styles.name} >{firebase.currentUser()}</p>
                
                </Col>

                <Col className={styles.paddingCero} sm={3} md={3} lg={3} xl={3}>
                    <img   onClick={handleShow} className={styles.options} alt='points'   src={'https://github.com/KARENLABO/GDL004-lab-notes/blob/develop/lab-notes/src/Images/downloading.png?raw=true'}/>
                </Col>
            
            </Row>
            
        </Container>
    )
}

export default Avatar