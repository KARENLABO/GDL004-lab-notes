import React, {useState} from 'react';
import firebase from '../config/firebase'
import './componentsCSS/inputsNotes.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

const colorsNotes = [ 'Primary','Secondary','Success','Danger','Warning','Info','Light','Dark']

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
        <div>
        
                <div
                onKeyUp = {
                    (e) => {
                        e.preventDefault();
                        upLoadNote();
                    }
                }
                style={{ width: '18rem' }}
            >
                    <input 
                        className= 'Titlenota'
                        value={tittleNote}
                        placeholder='Title'
                        onChange = {(e) => setNote(e.target.value)}
                    />
                </div>
                <div
                onKeyUp = {
                    (e) => {
                        e.preventDefault();
                        upLoadNote()
                    }
                }
                style={{ width: '18rem' }}
            >
                <input 
                    className= 'Bodynota'
                    value={bodyNote}
                    placeholder='Write your ideas here'
                    onChange = {(e) => setbodyNote(e.target.value)}
                    type='textarea'
                />
                <img onClick={deleteNote} width='20' alt='deletenoteimg' src='https://image.flaticon.com/icons/svg/1215/1215092.svg'/>
                </div>
                </div>
    )
}

export default MakeNotes