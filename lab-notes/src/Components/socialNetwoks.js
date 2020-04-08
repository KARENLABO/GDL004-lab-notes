import React from 'react';
import firebase from '../config/firebase'
import '../Components/componentsCSS/socialNetworks.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function SocialNetworksAuth (){
    return ( 
        <Container className='socialNetworks'>
            <Row >
                <Col>
                <p>or Sign in with</p>
                </Col>
            </Row>
            <Row>
            <Col md={6}>
                <img className='imgsSocialNetworks' onClick={google}alt='googleImg'src='https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png'/>
             
            </Col>
            <Col md={6}>
                <img  className='imgsSocialNetworks' onClick={facebook} alt='facebookImg'src='https://images.vexels.com/media/users/3/137253/isolated/preview/90dd9f12fdd1eefb8c8976903944c026-icono-de-facebook-logo-by-vexels.png'/>
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
    async function google (){
        try {
            await firebase.authGoogle()
        } catch (error) {
           console.log(error)
        }
        
    }

}


export default SocialNetworksAuth;


