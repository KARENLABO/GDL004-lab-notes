import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import '../Components/componentsCSS/Nav.css'
import styles from './componentsCSS/Button.module.css'
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
                <Col xs={9} sm={9} lg={9} md={9} >
                <Avatar handleShow={handleShow}/>
                </Col>
                <Col xs={3} sm={3} lg={3} md={3}>
                    <img   onClick={handleShow} className={styles.options} alt='points'   src={'https://github.com/KARENLABO/GDL004-lab-notes/blob/develop/lab-notes/src/Images/down-arrow.png?raw=true'}></img>
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