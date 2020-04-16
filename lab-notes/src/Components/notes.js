import React, {useState, useEffect} from 'react';
import MakeNotes from './inputsNotes'
import firebase from '../config/firebase'


function Notes (){
    const [notas, setNotas]= useState([])
    const [newNote, setNewNote]= useState()
    useEffect(()=>{
      fetchData()
    },[])


    return (
        <ul>
            <input type='text' value={newNote} onChange={(e) => setNewNote(e.target.value) }/>
            <button type='submit'onClick={createNote}>Create</button>
            {notas.map(notas =>(
                <li key={notas.id}>
                    <MakeNotes AddNote={notas}/>
                    </li>
            ))}
        </ul>
    )

    async function fetchData() {
		try {
         await firebase.fetchData(setNotas)
      
		} catch(error) {
			alert(error)
		}
    }
    
    function createNote () {
        firebase.createNote(newNote)
    }

}

export default Notes

