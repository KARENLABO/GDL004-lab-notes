import React from 'react';
import Card from 'react-bootstrap/Card'


// const colorsNotes = [ 'Primary','Secondary','Success','Danger','Warning','Info','Light','Dark']

function Cards ({nota, setNote}){
    
    return(
              <Card
                // bg={variant.toLowerCase()}
                // // key={}
                // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}rd
                style={{ width: '18rem' }}
              >
                <Card.Header>
                <input value={nota}/>
                </Card.Header>
                <Card.Body >
                 
                </Card.Body>
              </Card>
           
    )
}

export default Cards