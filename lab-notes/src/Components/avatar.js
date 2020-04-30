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
                    <img   onClick={handleShow} className={styles.options} alt='points'   src={'https://image.flaticon.com/icons/svg/271/271210.svg'}/>
                </Col>
            
            </Row>
            
        </Container>
    )
}

export default Avatar