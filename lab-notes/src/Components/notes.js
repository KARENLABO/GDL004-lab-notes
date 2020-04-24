import React, {useState, useEffect} from 'react';
import MakeNotes from './inputsNotes'
import firebase from '../config/firebase'
import NewCardButton from'./newCardButton'
import './componentsCSS/inputsNotes.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//  
function Notes (){
    const [titlesNotes, setTitlesNotes]= useState([])
    
    
    
    function createNote () {
        firebase.createNote('')
    }

    useEffect(()=>{
        firebase.fetchData(setTitlesNotes);
    },[])
    
 
    return (
        
        <div >
            <NewCardButton create={createNote}/> 
            <Container className='cards'>
                {titlesNotes.map(note =>(  
                
                    <Col   key={note.id}>
                        <MakeNotes  data={note}/>
                    </Col> 
                
                ))}
            </Container>
        </div>
    )
}

export default Notes

