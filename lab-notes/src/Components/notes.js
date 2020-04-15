import React, {useState, useEffect} from 'react';
import MakeNotes from './MakeNotes'
import firebase from '../config/firebase'


function Notes (){
    const [notas, setNotas]= useState([])
    useEffect(()=>{
      fetchData()
    },[])


    return (
        <ul>
            {notas.map(notas =>(
                <li key={notas.name}>
                    <MakeNotes AddNote={notas}/>
                    </li>
            ))}
        </ul>
    )

    async function fetchData() {
		try {
            const data= await firebase.fetchData()
            setNotas(data.docs.map(doc => doc.data()))
		} catch(error) {
			alert(error)
		}
	}
}

export default Notes

