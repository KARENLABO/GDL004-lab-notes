import React from 'react';
import Card from 'react-bootstrap/Card'


const colorsNotes = [ 'Primary','Secondary','Success','Danger','Warning','Info','Light','Dark']
function Cards (){
    return(
        [
            
            'Primary',            
            'Success',
            'Danger',
            'Warning',
            'Info',
            'Light'
          ].map((variant, idx) => (
            <>
              <Card
                bg={variant.toLowerCase()}
                key={idx+1}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
              >
                <Card.Header>Title</Card.Header>
                <Card.Body>
                  <Card.Title>{variant} Card Title </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </>
          ))
    )
}

export default Cards