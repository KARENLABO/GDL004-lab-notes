import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import '../Components/componentsCSS/Nav.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import firebase from '../config/firebase'
import Avatar from './avatar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function ModalSignOut() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory()
    
    function signOut (event){
        event.preventDefault()
        try { 
            firebase.logout()
            history.push('/SignIn')
        } catch (error) {
           alert('try Again')
        }
    }
  
    return (
      <div>
        <Container>
            <Row>
                <Col>
                <Avatar handleShow={handleShow}/>
                </Col>
                <Col>
                    <img  className='points' alt='points'  width='40' src={'https://image.flaticon.com/icons/svg/482/482620.svg'}></img>
                </Col>
            </Row>
        </Container>
       
        <Modal show={show} onHide={handleClose} animation={true}>
          
          <Modal.Header closeButton>
            <Modal.Title>
              <Avatar/>
            </Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <Button variant="danger" onClick={signOut}>
                Sign Out
            </Button>
            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>            
           </Modal.Footer>
           
          </Modal>
        </div>
    )
  
}
  
  export default ModalSignOut