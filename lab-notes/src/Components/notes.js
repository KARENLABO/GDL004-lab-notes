import React, {useState} from 'react';
import MakeNotes from './MakeNotes'

function Notes (){
    const [notas, setNotas]= useState([])

    const AddNote =(nota) =>{
        const arr =[...notas];
        arr.push(nota);
        setNotas(arr)
    }
    const removeNote = nota =>{
        const arr = notas.filter(t=> t !==nota);
        setNotas(arr);
    }

    return(
        <div>
            <MakeNotes AddNote={AddNote}/>
            <ul>
               {notas.map((t)=>{
                   return (<li key={t}> {t} <button onClick={()=> removeNote(t)}>x</button></li>)
               })} 
            </ul>
        </div>
        
    )
}

export default Notes

