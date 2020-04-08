import React from 'react';
import ChooseOptionAuth from './ChooseOptionAuth'
import InputSignIn from './inputsSignIn'
import Footer from './Footer'
import Banner from './Banner'
import SocialNetworks from './socialNetwoks'
import '../Components/componentsCSS/Auth.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function SignUp(){
    return (
        <Container>
            
            <Banner className='banner'/>
            <ChooseOptionAuth/>
            <InputSignIn/>
            <SocialNetworks/>
            <Footer/>
        </Container>
    )
}




export default SignUp;