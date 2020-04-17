import React, {useState} from 'react';
import firebase from '../config/firebase'



function MakeNotes ({AddNote}){
    const [note, setNote]= useState(AddNote.name)

    async function upLoadNote() {
        try {
            await firebase.upLoadNote(AddNote, note)
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
        <form
            onSubmit = { e => {
                    e.preventDefault();
                    upLoadNote()
                }
            }
        >
       
            
            <input
            
                value={note}
                onChange={(e) =>{
                    setNote(e.target.value)
                    }}
                type='text'
            />
            <button type='submit'> update </button>
            <img onClick={deleteNote} src=''/>       
        </form>
    )
}

export default MakeNotes