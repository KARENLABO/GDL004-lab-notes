import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import '../Components/componentsCSS/Nav.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import firebase from '../config/firebase'
import Avatar from './avatar'



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
            <Avatar handleShow={handleShow}/>  

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