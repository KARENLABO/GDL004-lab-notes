import React from 'react';
import Nav from'./Nav'
import Notes from './notes'
// import Cards from './Cards'
import NewCardButton from './newCardButton'
import './componentsCSS/dashBoard.css'

function DashBoard() {
    return <div className='dashboardPage'>
       <Nav/>
       <Notes/>
       {/* <Cards/> */}
       <NewCardButton/>
    </div>
}

export default DashBoard;