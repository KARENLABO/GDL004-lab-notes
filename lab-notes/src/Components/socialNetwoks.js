import React from 'react';
import firebase from '../config/firebase'
import '../Components/componentsCSS/socialNetworks.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useHistory} from 'react-router-dom'
import styles from './componentsCSS/Button.module.css'


function SocialNetworksAuth (){
    const history = useHistory()
    return ( 
        <Container className='socialNetworks'>
            <Row >
                <Col>
                <p>or Sign in with</p>
                </Col>
            </Row>
            <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <img className={styles.prueba} onClick={google}alt='googleImg'src='https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png'/>
             
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <img  className={styles.prueba2} onClick={facebook} alt='facebookImg'src='https://images.vexels.com/media/users/3/137253/isolated/preview/90dd9f12fdd1eefb8c8976903944c026-icono-de-facebook-logo-by-vexels.png'/>
            </Col>
            </Row>  
    
        </Container>
    )

    async function facebook (event){
        event.preventDefault()
        try {
            await firebase.authFacebook()
            history.push('/Dashboard')
        } catch (error) {
           console.log(error)
        }
        
    }
    async function google (event){
        event.preventDefault()
        try {
            await firebase.authGoogle()
            history.push('/Dashboard')
        } catch (error) {
           console.log(error)
        }
        
    }

}


export default SocialNetworksAuth;


