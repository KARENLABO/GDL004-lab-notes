import React, {useState, useEffect} from 'react';
import MakeNotes from './inputsNotes'
import firebase from '../config/firebase'
import NewCardButton from'./newCardButton'


//  
function Notes (){
    const [titlesNotes, setTitlesNotes]= useState([])
    
    async function fetchData() {
		try {
         await firebase.fetchData(setTitlesNotes)
      
		} catch(error) {
			alert(error)
		}
    }
    
    function createNote () {
        firebase.createNote('')
    }

    useEffect(()=>{
      fetchData()
    },[])
    
 
    return (
        
        <div>
            <NewCardButton create={createNote}/> 
            
            {titlesNotes.map(titlesNotes =>(   
                <div key={titlesNotes.id}>
                    <MakeNotes data={titlesNotes}/>
                 </div>
            ))}
        </div>
    )
}

export default Notes

