import React from 'react';
import Figure from 'react-bootstrap/Figure'

function NewCardButton () {
    return (
        <Figure >
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="https://image.flaticon.com/icons/svg/149/149030.svg"
            />
            <Figure.Caption>
                NEW NOTE
            </Figure.Caption>
            </Figure>
    )
}

export default NewCardButton
