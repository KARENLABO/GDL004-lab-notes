import React from 'react';
import Footer from './Footer'
import Banner from './Banner'
import InputSignUp from './inputsSignUp'
import ChooseOptionAuth from './ChooseOptionAuth'
import SocialNetworks from './socialNetwoks'
import '../Components/componentsCSS/Auth.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function SignUp () {
    return (
        <Container  fluid>
        <Row>
            <Col md={8} lg={9} className='BannerPage'>
                <Banner />
            </Col>
            <Col md={4} lg={3}className='registerSpace'>
                <ChooseOptionAuth/>
                <InputSignUp/>
                <SocialNetworks/>
                <Footer/>
            </Col>
        </Row>
    </Container>
    )
}




export default SignUp;