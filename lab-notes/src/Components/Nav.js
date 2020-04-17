import React from 'react';
import firebase from '../config/firebase'
import {useHistory} from 'react-router-dom'
import '../Components/componentsCSS/Nav.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function NavController (){
    const history = useHistory()
    return ( 
        <Container fluid className='Nav'>
            <Row>
                <Col  md={6} lg={10}>
                <h1 className='LettersLabNoteNav' >LAB NOTES</h1>
                </Col>
            
            <Col className='userInformation'md={2} lg={1}>

                    <Row className='hola' >
                        <img  className='avatarpicture' alt='avatar'src='https://image.flaticon.com/icons/svg/456/456141.svg'></img>
                    
                    </Row>
                    <Row lg={12}><p>Karen</p></Row>
               
             
            </Col>
            <Col md={3} lg={1}>
            <Button className='ButtonSignout'variant="outline-secondary" onClick={signOut}>Sign Out</Button>{' '}
            </Col>
            </Row>
    
        </Container>
    )

    async function signOut (){
        try {
            await firebase.logout()
            history.push('/SignIn')
        } catch (error) {
           alert('try Again')
        }
    }
}


export default NavController;
