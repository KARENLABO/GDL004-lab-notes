import React, {useState} from 'react';
import firebase from '../config/firebase'
import './componentsCSS/inputsNotes.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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
            <Container
             
                className='top-bar'
                onKeyUp = {
                    (e) => {
                        e.preventDefault();
                        upLoadNote();
                    }
                }
            >
                <Row md={12} lg={12}>
                    <Col sm={10}md={10}lg={10}>
                    <input 
                        className= 'Titlenota'
                        value={tittleNote}
                        placeholder='Title'
                        onChange = {(e) => setNote(e.target.value)}
                    />
                    </Col>
                    <Col sm={1}md={1}lg={1}>
                    <img onClick={deleteNote} width='20' alt='deletenoteimg' src='https://image.flaticon.com/icons/svg/1214/1214428.svg'/>
                    </Col>
                </Row>
            </Container>

            <div
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
                
              
            </div>
        </Container>
    )
}

export default MakeNotes