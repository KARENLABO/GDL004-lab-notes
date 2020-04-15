import React, {useState} from 'react';
import firebase from '../config/firebase'


function MakeNotes ({AddNote}){
const [note, setNote]= useState(AddNote.name)
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
        </form>
    )
    async function upLoadNote() {
		try {
            const data = await firebase.upLoadNote(AddNote, note)
            await setNote(data.docs.map(doc =>({...doc.data(), id:doc.id})))
		} catch(error) {
			alert(error)
		}
	}
}

export default MakeNotes