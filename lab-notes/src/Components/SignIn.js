import React from 'react';
import Footer from './Footer'
import Banner from './Banner'
import InputSignIn from './inputsSignIn'
import ChooseOptionAuth from './ChooseOptionAuth'
import SocialNetworks from './socialNetwoks'
import '../Components/componentsCSS/Auth.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function SignIn () {
    return (
        <Container  fluid>
        <Row>
            <Col md={8} lg={9} className='BannerPage'>
                <Banner />
            </Col>
            <Col md={4} lg={3}className='registerSpace'>
                <ChooseOptionAuth/>
                <InputSignIn/>
                <SocialNetworks/>
                <Footer/>
            </Col>
        </Row>
    </Container>
    )
}




export default SignIn;