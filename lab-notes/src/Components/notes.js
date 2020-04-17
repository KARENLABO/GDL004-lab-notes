import React, {useState, useEffect} from 'react';
import MakeNotes from './inputsNotes'
import firebase from '../config/firebase'
import NewCardButton from'./newCardButton'



function Notes (){
    const [notas, setNotas]= useState([])
    
    useEffect(()=>{
      fetchData()
    },[])
    

    return (
        <div>
            <NewCardButton create={createNote}/> 
            {notas.map(notas =>(   
                <div key={notas.id}>
                    <MakeNotes AddNote={notas}/>
                 </div>
            ))}
        </div>
    )

    async function fetchData() {
		try {
         await firebase.fetchData(setNotas)
      
		} catch(error) {
			alert(error)
		}
    }
    
    function createNote () {
        firebase.createNote('')
    }

}

export default Notes

