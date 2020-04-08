import React from 'react';
import './componentsCSS/footer.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



function Footer() {
  return (
    <Container >
        <Row className='Footer'>
        <p className='pFooter'>By Ana Karen Ramirez</p>
        </Row>
    </Container>
  );
}

export default Footer