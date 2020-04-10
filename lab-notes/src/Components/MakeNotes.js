import React, {useState} from 'react';



function MakeNotes ({AddNote}){
const [note, setNote]= useState('')
    return(
        <form
            onSubmit = { e => {
                    e.preventDefault();
                    AddNote(note)
                    setNote('');
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
            <button type='submit'> save </button>
        </form>
    )
}

export default MakeNotes