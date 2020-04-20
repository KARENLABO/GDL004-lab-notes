import React, {useState} from 'react';
import firebase from '../config/firebase'



function MakeNotes ({AddNote}){
    const [note, setNote]= useState(AddNote.name)

    async function upLoadNote() {
        try {
            firebase.upLoadNote(AddNote, note)
        } catch(error) {
            alert('try again, please ')
    
        }
    }
    function deleteNote() {
        
        try {
            firebase.deleteNote(AddNote)
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <div
            onKeyUp = {
                (e) => {
                    e.preventDefault();
                    upLoadNote();
                }
            }
        >
            <input 
                className= 'nota'
                value={note}
                onChange = {(e) => setNote(e.target.value)}
            />
            <img onClick={deleteNote} width='20' alt='deletenoteimg' src='https://image.flaticon.com/icons/svg/1215/1215092.svg'/>
        </div>
    )
}

export default MakeNotes