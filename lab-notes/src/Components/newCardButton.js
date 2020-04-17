import React from 'react';
import Figure from 'react-bootstrap/Figure'
import './componentsCSS/newCardButton.css'

function NewCardButton ({create}) {
    return (
        <Figure className='NewCardButton'>
            <Figure.Image
                onClick ={create}
                width={60}
                height={60}
                alt="newNote"
                src="https://github.com/KARENLABO/GDL004-lab-notes/blob/develop/lab-notes/src/Images/plus%20(3).png?raw=true"
            />
            <Figure.Caption className='lettersnewnote'>
                NEW NOTE
            </Figure.Caption>
             </Figure>
    )
}


export default NewCardButton
