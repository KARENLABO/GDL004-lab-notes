import React, {useState} from 'react';
import firebase from '../config/firebase'
import './componentsCSS/inputsNotes.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Styles from './componentsCSS/Button.module.css'


// const colorsNotes = [ 'Primary','Secondary','Success','Danger','Warning','Info','Light','Dark']

function MakeNotes ({data}){
    const [tittleNote, setNote]= useState(data.titleNote)
    const [bodyNote, setbodyNote]= useState(data.bodyNote)
    

    async function upLoadNote() {
        try {
            firebase.upLoadNote(data, tittleNote, bodyNote)
        } catch(error) {
            alert('try again, please ')
        }
    }
    
    function deleteNote() {
        
        try {
            firebase.deleteNote(data)
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <Container className='card'>
            <Row
                className='top-bar'
                onKeyUp = {
                    (e) => {
                        e.preventDefault();
                        upLoadNote();
                    }
                }
            >
                <Col className={Styles.paddingCero}>
                    <input 
                        className= 'Titlenota'
                        value={tittleNote}
                        placeholder='Title'
                        onChange = {(e) => setNote(e.target.value)}
                    />
                    </Col>

                    <Col lg={2} className={Styles.paddingCero} >
                    <img onClick={deleteNote} width='20' alt='deletenoteimg' src='https://image.flaticon.com/icons/svg/1214/1214428.svg'/>
                </Col>
        
            </Row>

            <Row
            className='middle-bar'
                onKeyUp = {
                    (e) => {
                        e.preventDefault();
                        upLoadNote()
                    }
                }
                
            >
                <textarea 
                    className= 'Bodynota'
                    value={bodyNote}
                    placeholder='Write your ideas here'
                    onChange = {(e) => setbodyNote(e.target.value)}
                    type='textarea'
                
                >
                </textarea>
                
              
            </Row>
        </Container>
    )
}

export default MakeNotes