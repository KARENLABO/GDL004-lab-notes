import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import '../Components/componentsCSS/Nav.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import firebase from '../config/firebase'
import Avatar from './avatar'
import Styles from './componentsCSS/container-modal.module.css'




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

            <Modal  show={show}  onHide={handleClose} animation={true}>
                    <Modal.Header className={Styles.fotoModal}   closeButton>
                        <Modal.Title >
                                                
                            <img  className={Styles.avatar}  alt='avatar'  src={firebase.ProfilePicture()}></img>
                                            
                            <p className={Styles.name} >{firebase.currentUser()}</p>
                                
                           
                           

                        </Modal.Title>
                    </Modal.Header>

                <Modal.Footer className={Styles.conteinerModal}>
                    <Button variant="dark"  onClick={signOut}>
                        Sign Out
                    </Button>
                    <Button className={Styles.buttonClosesecion} onClick={handleClose}>
                        Close
                    </Button>            
                </Modal.Footer>
           
            </Modal>
        </div>
    )
  
}
  
  export default ModalSignOut